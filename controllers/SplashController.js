const fs = require('fs');
const path = require('path');

// Constants
const constants = require('../conf/constants');



function readDirAsync(path) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, (err, dir) => {
            if (err) {
                reject(err);
            } else {
                resolve(dir);
            }
        })
    });
}


/**
 * Retorna una imagen random para el splash con locale pasado por parámetro. Si no está definido el locale devuelve uno
 * por defecto.
 *
 * @param req, con locale
 * @param res
 */
async function getSplashByLocale (req, res) {
    try {
        if (req.params.locale) {
            var pathRes = __dirname + '/../images/error.jpg';
            var folders = await readDirAsync(constants.RESOURCES_SPLASH_PATH);
            for (const folder of folders) {
                if (pathRes == (__dirname + '/../images/error.jpg') && folder.split(",").includes(req.params.locale)) {
                    var files = await readDirAsync(constants.RESOURCES_SPLASH_PATH + '/' + folder);

                    files = files.filter((value) => {
                        let filename = value.split('.');
                        return filename[1] === 'jpg';
                    });
                    if (files.length > 0) {
                        var randomIdx = Math.floor((Math.random() * files.length));
                        pathRes = constants.RESOURCES_SPLASH_PATH + '/' + folder + '/' + files[randomIdx];
                    }
                }
            }
            if (pathRes == __dirname + '/../images/error.jpg') {
                var files = await readDirAsync(constants.RESOURCES_SPLASH_PATH + '/default');

                files = files.filter((value) => {
                    let filename = value.split('.');
                    return filename[1] === 'jpg';
                });
                if (files.length > 0) {
                    var randomIdx = Math.floor((Math.random() * files.length));
                    pathRes = constants.RESOURCES_SPLASH_PATH + '/default/' + files[randomIdx];
                }
            }
            res.setHeader('Content-Type', 'image/jpeg');
            res.sendFile( path.resolve(pathRes));
        }
    } catch (e) {
        res.setHeader('Content-Type', 'image/jpeg');
        res.sendFile(path.resolve(__dirname + '/../images/error.jpg'));
    }
}


module.exports = {getSplashByLocale};
