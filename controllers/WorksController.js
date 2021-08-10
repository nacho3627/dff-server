const fs = require('fs');
const path = require('path');
const encoder = require('../functions/encodeFunctions');

// Constants
const constants = require('../conf/constants');

function lpad(arg) {
    var argS = arg + "";
    var pad = "000000000"
    var ans = pad.substring(0, pad.length - argS.length) + argS;
    return ans;
};


/**
 * Retorna la cantidad de imágenes con extensión jpg que hay en la carpeta resources/work
 */
function getCount(req, res) {
    fs.readdir(constants.RESOURCES_WORK_PATH, (err, files) => {
        if (err) throw err;
        let jpgFiles = 0;
        files.forEach((value, index) => {
            let filename = value.split('.');
            if (constants.ALLOWED_EXTENSIONS.indexOf(filename[1]) !== -1) jpgFiles += 1;
        });

        res.setHeader('Content-Type', 'text/plain');
        res.json({
            "count": jpgFiles.toString()
        });
    });
};

/**
 * Desencripta el :code pasado por parámetro y devuelve la imagen correspondiente al indice.
 * La imágenes está en la carpeta resources/works.
 */
function getWorkCode(req, res) {
    try {
        var imageIndex = encoder.decode(req.params.code); // Traducción del indice
        res.setHeader('Content-Type', 'image/jpeg');
        res.sendFile(path.resolve(__dirname + "/../" + constants.RESOURCES_WORK_PATH + "/" + lpad(imageIndex) + ".jpg"));
    } catch (e) {
        res.setHeader('Content-Type', 'image/jpeg');
        res.sendFile(__dirname + '/../images/error.jpg');
    }
};


function getVideo(req, res) {
  try {
      const videoPath = constants.RESOURCES_VIDEO_PATH + '/video.m4v';

      const stat = fs.statSync(videoPath);
      const fileSize = stat.size;
      const range = req.headers.range;
      if(range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, {start, end});
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': 'video/m4v'
        }

        res.writeHead(206, head);
        file.pipe(res);


      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/m4v'
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
      }


  } catch (e) {
    console.log(e);
    res.send(e);
  }
};


module.exports = {getCount, getWorkCode, getVideo};
