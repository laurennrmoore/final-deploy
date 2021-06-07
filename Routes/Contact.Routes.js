let Contact = require('../models/Contacts.model')
const router = require('express').Router()




router.route('/add').post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const newContact = new Contact ({
        name,
        email,
        message
    })
    newContact.save()
    .then(() => {
        res.json('New Contact Added')
    }).catch((err) => {
        res.status(400).json('Uh Oh ' + err)
    })
})

router.route('/').get((req, res) => {
    Contact.find()
    .then((contacts) => {
        res.json(contacts)
    }).catch((err) => {
        res.status(400).json('Uh Oh ' + err)
    })
})

module.exports = router;