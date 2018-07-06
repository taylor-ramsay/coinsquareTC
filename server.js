const express = require('express');
var cors = require('cors')
const app = express();
const axios = require('axios')
const PORT = process.env.PORT || 8080
const dev = app.get('env') !== 'production'
const apiUrl = 'https://api.bitfinex.com/v1/pubticker/btcusd'

app.use(cors())

app.get('/btc-price', (req, res) => {
    axios.get(apiUrl)
        .then(function (response) {
            res.json(response.data)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
})

if (!dev) {
    console.log('Production')
    app.use(express.static(__dirname + '/frontend/dist'));
    app.get('*', (req, res) => res.sendFile(__dirname + '/frontend/dist/index.html'));
}

if (dev) {
    console.log('Development')
    app.use(express.static(__dirname + '/frontend/src'));
    app.get('*', (req, res) => res.sendFile(__dirname + '/frontend/src/index.html'));
}

app.listen(PORT, () => {
    console.log("server listening on " + PORT);
});

