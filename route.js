const { Router } = require('express');
const { consultData, c19BoliviaData } = require('./push_notification');

    
const router = Router();

router.get('/', async (req, res) => {


    await res.json(consultData())

});

router.get('/c19Bolivia', async (req, res) => {
    await console.log(c19BoliviaData());
});





module.exports = router;