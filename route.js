const { Router } = require('express');
const { sendPushNotification, c19BoliviaData } = require('./push_notification');


const router = Router();

router.post('/', async (req, res) => {

    
    if (req.headers.firebase_key !== process.env.FIREBASE_KEY) {
        return res.status(500).json({
            error: 'the key was not provided'
        })
    }

    await sendPushNotification();

    return res.json({
        ok: true,
        message: 'Push notification message sent'
    })

});

router.get('/', async (req, res) => {
    const dataBolivia = await c19BoliviaData();

    return res.json(dataBolivia);
});





module.exports = router;