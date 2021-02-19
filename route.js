const { Router } = require('express');
const { consultData, c19BoliviaData } = require('./push_notification');

const schedule = require('node-schedule');
const router = Router();

router.get('/', async (req, res) => {


    await res.json(consultData())

});

router.get('/c19Bolivia', async (req, res) => {
    await console.log(c19BoliviaData());
});


const schedule_xd = schedule.scheduleJob('* * /17 * * *', async () => {
    await c19BoliviaData();
});


module.exports = router;