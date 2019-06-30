const mongoose = require('mongoose')
const Schema = require('./schema')
const {Project, Blog, Content, Paragraph, Contact} = Schema

function addNewProject(name, imageUrl, description) {
    new Project({
        name,
        imageUrl,
        description
    }).save()
}

function addNewPara(title, subTitle, backgroundImage, content) {
    new Blog({
        title,
        subTitle,
        backgroundImage,
        content
    }).save()
}

function addNewContact(name, email, description){
    return new Promise((resolve, reject) => {
        new Contact({name, email, description})
            .save()
            .then(() => resolve('done'))
            .catch(err => reject('some error occured'))
    })
}

module.exports.addNewContact = addNewContact


// addNewProject(
//     "Colorizing and Restoring Old Images with Deep Learning",
//     "https://i.ibb.co/vBPvzD6/gan.png",
//     "Colorizing and Restoring Old Images with Deep Learning"
// )


// addNewPara(
//     'This is my first title', 
//     'This is my subtitle, Bitch',
//     'https://demos.creative-tim.com/marketplace/material-kit-pro/assets/img/kit/pro/bg5.jpg',
//     [
//         new Content(
//             {
//                 heading : 'From Python to Keras in 30 minutes',
//                 img: 'https://images.unsplash.com/photo-1553908334-c69678072545?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
//                 paragraph: "<p>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more. We are here to make life better.</p><p>And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.</p>"
//             }),
//             new Content(
//                 {
//                     heading : 'Rest of the Story:',
//                     paragraph: "<p>We are here to make life better. And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.I speak yell scream directly at the old guard on behalf of the future. daytime All respect prayers and love to Phife’s family Thank you for so much inspiration.</p><p>Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand Panda I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife’s family Thank you for so much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!</p><p>I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!</p>"
//                 })
//     ]
// )