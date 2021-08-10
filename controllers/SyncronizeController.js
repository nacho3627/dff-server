const fs = require('fs');
require('es6-promise').polyfill();
require("isomorphic-fetch");
const Dropbox = require('dropbox').Dropbox;
const unzip = require('unzip');
const rimraf = require('rimraf');
var ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const Jimp = require('jimp');

// Cloud Message Inicialization
const admin = require('firebase-admin');
var serviceAccount = require('../conf/keys/cloudMessaging.json');
const encoder = require('../functions/encodeFunctions');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://wip-ios.firebaseio.com'
});

// See documentation on defining a message payload.
var message = {
    notification: {
        title: "Daily Finger Frame",
        body: "The drawing has been updated!"
    },
    apns: {
        headers: {
            'apns-priority': '10',
        },
        payload: {
            aps: {
                sound: 'default',
                badge: 1
            }
        }
    },
    android: {
        priority: 'high',
        notification: {
            sound: 'default',
        }
    },
    topic: "new-image"
};


var messagePro = {
    notification: {
        title: "Daily Finger Frame",
        body: "The drawing has been updated!"
    },
    apns: {
        headers: {
            'apns-priority': '10',
        },
        payload: {
            aps: {
                sound: 'default',
                badge: 1,
                "mutable-content": 1
            },
            url: ""
        }
    },
    android: {
        priority: 'high',
        notification: {
            sound: 'default',
        }
    },
    topic: "new-image-pro"
};

// Constants
const constants = require('../conf/constants');

// Inicializacion de App Dropbox wip-server-works
var dbxWorks = new Dropbox({accessToken: constants.DBX_WORKS_TOKEN});
// Inicializacion de App Dropbox wip-server-splash
var dbxSplash = new Dropbox({accessToken: constants.DBX_SPLASH_TOKEN});

// Funciones
function lpad(arg) {
    var argS = arg + "";
    var pad = "000000000"
    var ans = pad.substring(0, pad.length - argS.length) + argS;
    return ans;
};

function streamFromString(raw) {
    const Readable = require('stream').Readable;
    const s = new Readable();
    s._read = function noop() {
    };
    s.push(raw);
    s.push(null);
    return s;
};

function createVideo(imageCount, sendNotification) {
    console.log('Creating updated video');

    var fps = constants.VIDEO_FPS;

    var proc = ffmpeg(path.resolve(constants.RESOURCES_WORK_PATH + '/%09d.jpg'))
        .inputFPS(fps)
        .outputFPS(fps)
        .on('end', function () {
            // Send notifications to all devices
            if (sendNotification) {
                admin.messaging().send(message)
                    .then((response) => {
                        // Response is a message ID string.
                        console.log('Successfully sent message:', response);
                    })
                    .catch((error) => {
                        console.log('Error sending message:', error);
                    }).finally(() => {
                        messagePro.apns.payload.url = "http://" + constants.SERVER_HOST +"wip/images/works/" + encoder.encode(imageCount);
                        admin.messaging().send(messagePro)
                            .then((response) => {
                                console.log('Successfully sent message pro:', response);
                            })
                            .catch((error) => {
                                console.log('Error sending message pro:', error);
                            });
                    });
            }

            console.log('File has been converted successfully');
            console.log('Process completed');
        })
        .on('error', function (err) {
            console.error('An error happened: ' + err.message);
        })
        // save to file
        .save(path.resolve(constants.RESOURCES_VIDEO_PATH + '/video.m4v'));
}

function writeFileAsync(filename, data, encoding) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filename, data, encoding, function (err) {
            if (err) {
                reject('Error writing downloaded files in local directory: ' + err.message);
            } else {
                resolve('Write successful');
            }
        });
    });
}

function readDirAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, files) {
            if (err) {
                reject('Error reading local directory: ' + err.message);
            } else {
                resolve(files);
            }
        });
    });
}

// Verificador del Webhook (requerido por Dropbox)
function webhookVerifier(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.send(req.query.challenge);
};

/**
 *  Trae la imagen del dropbox, la guarda con el indice correspondiente en la carpeta resources y la elimina del dropbox.
 *
 *  TODO:
 *      * Handlear los errores.
 *      * Devolver la respuesta despues que se terminen todas las promises.
 */
async function syncWorkFiles(req, res) {
    try {
        console.log('Listing files from Dropbox...');

        // Leemos carpeta dropbox para ver si hay archivos
        const dropboxListFolder = await dbxWorks.filesListFolder({
            'path': constants.DROPBOX_WORK_PATH,
        });

        if (dropboxListFolder.entries.length !== 1) throw new Error('No files, or more than one file to sync in Dropbox');

        // Iteramos archivos del dropbox para descargarlos
        for (const value of dropboxListFolder.entries) {
            console.log('Downloading image: ' + value.name);
            const downloadableImage = await dbxWorks.filesDownload({
                'path': value.path_lower
            });

            console.log('Reading local folder...');
            const localFilesArray = await readDirAsync(constants.RESOURCES_WORK_PATH);
            let jpgFiles = 0;

            console.log('Local files: ' + localFilesArray.length);
            await localFilesArray.forEach((value, index) => {
                let filename = value.split('.');
                if (constants.ALLOWED_EXTENSIONS.indexOf(filename[filename.length - 1]) !== -1) jpgFiles += 1;
            }); // For filename index

            // Escribimos archivo locales
            let localFilename = lpad(jpgFiles + '');
            const file = value.name.split('.');

            console.log('Writing new images in server...');
            await writeFileAsync(`${constants.RESOURCES_WORK_PATH}/${localFilename}.${file[file.length - 1]}`, downloadableImage.fileBinary, 'binary');

            // Convertimos png en jpg
            if (file[file.length - 1] == 'png' || file[file.length - 1] == 'PNG') {
                console.log('PNG image detected... converting to jpg');
                const toConvert = await Jimp.read(`${constants.RESOURCES_WORK_PATH}/${localFilename}.${file[file.length - 1]}`);
                toConvert.quality(100).write(`${constants.RESOURCES_WORK_PATH}/${localFilename}.jpg`);

                // Delete original png file
                fs.unlink(`${constants.RESOURCES_WORK_PATH}/${localFilename}.${file[file.length - 1]}`, err => {
                    if (err) throw err;
                    console.log(`Successfully deleted ${constants.RESOURCES_WORK_PATH}/${localFilename}.${file[file.length - 1]}`);
                });
            }


            // Borramos archivos del Dropbox
            console.log('Deleting downloaded files in Dropbox...');
            await dbxWorks.filesDeleteBatch({"entries": [{"path": value.path_lower}]});

            await createVideo(localFilesArray.length, constants.SEND_NOTIFICATIONS);
        }

        res.status(200);
        res.send('Ok');

    }
    catch (err) {
        console.error(err);
        res.status(404);
        res.send(err.message);
    }


};


/**
 * Trae toda la carpeta de splash screens y la pisa
 */
function syncSplashFiles(req, res) {
    console.log('Downloading zipped Splash folder from Dropbox...');
    dbxSplash.filesDownloadZip({'path': constants.DROPBOX_SPLASH_PATH})
        .then(function (data) {
            console.log('Download successful');
            console.log('Deleting Splash local folder...');
            rimraf(constants.RESOURCES_SPLASH_PATH, function () {
                console.log('Unzipping new Splash folder in local...');
                streamFromString(data.fileBinary).pipe(unzip.Extract({path: constants.RESOURCES_PATH}));
                console.log('New Splash folder unzipped');
                console.log('Splash synchronized');
                res.send('Splash synchronized');
            });

        }).catch(function (err) {
        console.error(err.message);
        res.send('Error: ' + err.message);
    });

};


function generateVideoOnDemand(req, res) {
    fs.readdir(constants.RESOURCES_WORK_PATH, (err, files) => {
        console.log('Reading local folder...');
        if (err) throw err;
        let jpgFiles = 0;
        // Count jpg files in local folder
        files.forEach((value, index) => {
            let filename = value.split('.');
            if (constants.ALLOWED_EXTENSIONS.indexOf(filename[filename.length - 1]) !== -1) jpgFiles += 1;
        }); // For filename index
        // Creamos video
        createVideo(jpgFiles, false);
        res.sendStatus(200);
    });
}

function sendNotification(req, res) {
    // Send notifications to all devices
    admin.messaging().send(message)
        .then(function (response) {
            // Response is a message ID string.
            res.send(response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
            console.log(message);
            res.send(error);
        });
};

module.exports = {
    webhookVerifier,
    syncSplashFiles,
    syncWorkFiles,
    streamFromString,
    sendNotification,
    generateVideoOnDemand
};
