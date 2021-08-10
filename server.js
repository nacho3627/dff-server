// Express
const express = require('express');
const app = express();


// Modules
const bodyParser = require('body-parser');
var ffmpeg = require('fluent-ffmpeg');



// Constants
const constants = require('./conf/constants');

// Controllers
const syncronizeController = require('./controllers/SyncronizeController');
const worksController = require('./controllers/WorksController');
const splashController = require('./controllers/SplashController');


// Servir archivos estaticos dentro de la carpeta public
app.use("/", express.static("../wip-web/wip/www/"));

app.use("/resources", express.static("../resources/video/"));

app.use(bodyParser.json({}));


// Endpoints
app.get('/images/splash/:locale', splashController.getSplashByLocale);

app.get('/images/works/get_count', worksController.getCount);

app.get('/images/works/:code', worksController.getWorkCode);

app.get('/video', worksController.getVideo);


app.get('/sync-work-files', syncronizeController.webhookVerifier);

app.post('/sync-work-files', syncronizeController.syncWorkFiles);

app.get('/sync-splash-files', syncronizeController.webhookVerifier);

app.post('/sync-splash-files', syncronizeController.syncSplashFiles);

app.get('/create-video', syncronizeController.generateVideoOnDemand);



app.listen(constants.PORT, () => {
    console.log('Server running on localhost:8000');
});
