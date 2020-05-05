import * as express from 'express';

import DB from './db';

const router = express.Router();

router.use(function (req, res, next) {
    // const protocol = req.secure ? 'https' : 'http'
    const protocol = req.headers.referer.split(":")[0]; // The least ideal option, but all of the correct ones (req.secure, req.protocol, etc.) fail to correctly identify either HTTP or HTTPS requests from ndragunow.nz. Suspect this is the result of the reverse proxy sending forwarding on my requests.
    console.log(protocol)
    res.header("Access-Control-Allow-Origin", `${protocol}://ndragunow.nz`); // TODO: Move to a config file.
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/tramps', async (req, res) => {
    try {
        let skills = await DB.Tramps.getTramps();
        res.json(skills);
    } catch (e) {
        console.log(e); // Don't send the error to the client, just log it - it might have a password in it or something!
        res.sendStatus(500);
    }
});

router.get('/api/tramps/delete', async (req, res) => {
    try {
        let skills = await DB.Tramps.deleteTramps();
        res.json(skills);
    } catch (e) {
        console.log(e); // Don't send the error to the client, just log it - it might have a password in it or something!
        res.sendStatus(500);
    }
});

export default router;