const axios = require('axios');

require('dotenv').config();

const sendPushNotification = async () => {

    const { data } = await axios.default.get('https://api.covid19api.com/summary');
    const boliviaData = data.Countries[20];

    const { Country, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed } = boliviaData;


    const res = await axios.default.post('https://fcm.googleapis.com/fcm/send', {

        to: "dKarLxrOSuevHkQ-bG90wE:APA91bEdrKNt0DV6B3MZJnRZzUJwhAyVWJpSbPE8xBtH_gHlt-ZN46oVxkPeVmoBnwuR7oo0MLwXqHllCbHIYM6prqXGuU3vCE0jRyvSC9tj63Ylbchs6xTlEze7c67wHCFMRv29Eat1",
        notification: {
            title: `Casos en ${Country}`,
            body: `
            Total: ${TotalConfirmed}
            Nuevos confirmados: ${NewConfirmed}
            TotalRecovered recuperados: ${TotalRecovered}
            Total decesos: ${TotalDeaths}
            `,
            icon: "https://www.gstatic.com/devrel-devsite/prod/v4ff7513a940c844d7a200d0833ef676f25fef10662a3b57ca262bcf76cbd98e2/firebase/images/touchicon-180.png"
        },
        data: {
            food: "food from postman"
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
        TotalDeaths,
        TotalRecovered, NewConfirmed
    }

}

module.exports = {
    sendPushNotification,
    c19BoliviaData
}