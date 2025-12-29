import api from './src/createHafasAPIClient.js'
import createIntro from './src/intro.js'
import createDocs from './src/docs.js'
import express from 'express'

const expApp = express()

const hostname = process.env.APP_HOSTNAME || 'oebb.macistry.com'
const disableWebPage = process.env.APP_RENDER_DEFAULT_PAGES === 'false'

// Mount the API under the /api path
expApp.use('/api', api)

if (!disableWebPage) {
    expApp.get('/', (req, res) => {
        res.send(createIntro(hostname));
    });
    expApp.get('/docs', (req, res) => {
        res.send(createDocs(hostname));
    });
}

const server = expApp.listen(3000, (err) => {
    console.log(`HAFAS-REST-API listening on http://${hostname}:3000`)
    if (err) console.error(err)
})

process.on('SIGTERM', async () => {
    try {
        await cleanUpTasks();
        console.log('Application shut down gracefully.');
        process.exit(0);
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1);
    }
});