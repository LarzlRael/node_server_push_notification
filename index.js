const express = require('express');
const app = express();

const port = process.env.PORT || 4000

app.use(require('./route'));

app.listen(port, () => {
    console.log(`server on port http://localhost:${port}`);
})