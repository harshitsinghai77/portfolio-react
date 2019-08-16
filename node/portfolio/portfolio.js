const express = require('express');
const router = express.Router();
const Schema = require('./schema')
const sendEmail = require('./sendEmail')
const {Project, Blog} = Schema

router.get('/get-projects', (req, res) => {
    Project.find()
        .then(data => res.send(data))
        .catch(() => res.status(404).send('Some error occured'))
})

router.post('/contact-form', (req, res) => {
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

router.get('/blog/:id', (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(data => {
            if(!data) return res.status(404).send('No data found')
            res.send(data)
        })
        .catch(err => res.status(404).send('Some error occured'))
})

module.exports = router;