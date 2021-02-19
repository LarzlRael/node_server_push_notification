const axios = require('axios');
const { device_list } = require('./device list');

require('dotenv').config();

const sendPushNotification = async () => {

    const { data } = await axios.default.get('https://api.covid19api.com/summary');
    const boliviaData = data.Countries[20];

    const { Country, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed } = boliviaData;


    const res = await axios.default.post('https://fcm.googleapis.com/fcm/send', {

        registration_ids: device_list,

        notification: {
            title: `Casos en ${Country}`,
            body: `Total: ${TotalConfirmed}
            Nuevos confirmados: ${NewConfirmed}
            Total recuperados: ${TotalRecovered}
            Total decesos: ${TotalDeaths}
            `,
            icon: "https://www.gstatic.com/devrel-devsite/prod/v4ff7513a940c844d7a200d0833ef676f25fef10662a3b57ca262bcf76cbd98e2/firebase/images/touchicon-180.png"
        },
        data: {
            food: "push from nodejs server"
        }

    }, {
        headers: {
            Authorization: `key=${process.env.FIREBASE_KEY}`
        }
    })

    return res.data;
}

const c19BoliviaData = async () => {

    const { data } = await axios.default.get('https://api.covid19api.com/summary');
    const boliviaData = data.Countries[20];

    const { Country, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed } = boliviaData;


    return {
        pais: Country,
        total_confirmados: TotalConfirmed,
        muertes_totales: TotalDeaths,
        total_recuperados: TotalRecovered,
        nuevos_confirmados: NewConfirmed
    }

}

module.exports = {
    sendPushNotification,
    c19BoliviaData
}