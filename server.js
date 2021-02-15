const express = require('express');
const bodyParser = require('body-parser');
const MainRouter = require('./src/route');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to my world')
});

app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

app.use('/api', MainRouter);

app.listen(3001, () => {
    console.log(`server running`)
});