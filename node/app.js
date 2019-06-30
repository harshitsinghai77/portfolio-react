const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Schema = require('./schema')
const mongoFunction = require('./mongoFunction')
const {Project, Blog} = Schema
const sendEmail = require('./sendEmail')
const dotenv = require('dotenv');

dotenv.config();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0-uegxx.mongodb.net/test?retryWrites=true&w=majority`, {dbName:'Portfolio',useNewUrlParser: true})
    .then(res => console.log('Connected to datatbase'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('<h1>The server is working</h1>')
})

app.get('/get-projects', (req, res) => {
    Project.find()
        .then(data => res.send(data))
        .catch(() => res.status(404).send('Some error occured'))
})

app.post('/contact-form', (req, res) => {
    const name= req.body.name
    const email= req.body.email
    const description= req.body.description

    mongoFunction.addNewContact(name, email, description)
        .then(() => {
            res.send('Details recieved Successfully')
            sendEmail.SendEmail(name, email, description)
        })
        .catch(() => res.status(404).send('Some error occured. Please try again later'))
})

app.get('/blog/:id', (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(data => {
            if(!data) return res.status(404).send('No data found')
            res.send(data)
        })
        .catch(err => res.status(404).send('Some error occured'))
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("The server is running");
});