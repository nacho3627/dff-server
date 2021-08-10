const PORT = process.env.PORT || 8000;
const PRODUCTION = true;

if(PRODUCTION) {
  var DBX_WORKS_TOKEN = 'XXX';
  var SEND_NOTIFICATIONS = true;
} else {
  var DBX_WORKS_TOKEN = 'XXX';
  var SEND_NOTIFICATIONS = false;
}

const DBX_SPLASH_TOKEN = 'XXX';

// Video
const VIDEO_LENGHT = 5; // En segundos
const VIDEO_FPS = 10;

// Files
const RESOURCES_PATH = "../resources";
const RESOURCES_WORK_PATH = RESOURCES_PATH + "/works";
const RESOURCES_SPLASH_PATH = RESOURCES_PATH + "/splash";
const RESOURCES_VIDEO_PATH = RESOURCES_PATH + "/video";

const DROPBOX_PATH = "/Aplicaciones";
const DROPBOX_WORK_PATH = "/works";
const DROPBOX_SPLASH_PATH = "/splash";

const ALLOWED_EXTENSIONS = ['jpg', 'JPG', 'png', 'PNG'];
const SERVER_HOST = "localhost";

module.exports = {
    RESOURCES_PATH,
    RESOURCES_WORK_PATH,
    RESOURCES_SPLASH_PATH,
    RESOURCES_VIDEO_PATH,
    DROPBOX_PATH,
    DROPBOX_WORK_PATH,
    DROPBOX_SPLASH_PATH,
    PORT,
    PRODUCTION,
    DBX_WORKS_TOKEN,
    DBX_SPLASH_TOKEN,
    SEND_NOTIFICATIONS,
    VIDEO_LENGHT,
    ALLOWED_EXTENSIONS,
    VIDEO_FPS,
    SERVER_HOST
};
