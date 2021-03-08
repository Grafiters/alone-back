const express = require('express');
const bodyParser = require('body-parser');
const MainRouter = require('./src/route');
// const Sequelize = require('sequelize');
const db = require('./src/db/models/index');
// const sequelize = require('./config/db.config');
const cors = require('cors');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send('HELLO MY FUCKING SHIT')
});

// const sequelize = new Sequelize('alone', 'root', 'alone123', {
//   host: 'db',
//   port: '3306',
//   dialect: 'mysql'
// });

try {
    db.sequelize
        .sync().then( () => console.log('connection succes'))
}catch (err){
    console.log(err)
}

app
    .use(cors())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());
    
app.use('/api', MainRouter)

app.listen(port, host ,() => console.log(`running on port ${port}`));