const express = require('express');
const bodyParser = require('body-parser');
const MainRouter = require('./src/route');
const db = require('./src/db/models/index');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('HELLO MY FUCKING SHIT')
});

app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

app.use('/api', MainRouter)

db.sequelize.sync().then( () => {
    app.listen(port, host ,() => console.log(`running on port ${port}`));
});