const express = require('express')
const app = express()
const Portfolio = require('./portfolio/portfolio');
const Weather = require('./weatherApp/weather');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/portfolio', Portfolio)
app.use('/weather', Weather)

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0-uegxx.mongodb.net/test?retryWrites=true&w=majority`, {dbName:'Portfolio',useNewUrlParser: true})
    .then(res => console.log('Connected to datatbase'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('<h1>The server is working</h1>')
})



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("The server is running");
});