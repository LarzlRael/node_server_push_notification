const express = require('express');

const schedule = require('node-schedule');
const { sendPushNotification } = require('./push_notification');
const app = express();

const port = process.env.PORT || 4000

schedule.scheduleJob('* * /20 * * *', async () => {
    await sendPushNotification();
});

app.use(require('./route'));


app.listen(port, () => {
    console.log(`server on port http://localhost:${port}`);
})