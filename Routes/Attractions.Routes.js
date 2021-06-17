let Attraction = require('../models/Attractions.model')
const router = require('express').Router()




router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const website = req.body.website
    const image = req.body.imageURL
    const location = req.body.location
    const newAttraction = new Attraction ({
        name,
        description,
        website,
        imageURL,
        location
        })
    newAttraction.save()
        .then(()=>{
            res.json('New Attraction Added')
            })
            .catch((err)=>{
                res.status(400).json("Uh Oh " + err)
            })
})

router.route('/').get((req, res) => {
    Attraction.find()
    .then(attraction =>
        res.json(attraction))
        .catch((err) => {
            res.status(400).json('Uh Oh ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
    .then((attraction) =>{
        res.json(attraction)
    }).catch((err) => {
        res.status(400).json('Uh oh ' + err)
    });
}).put((req,res)=>{
    Attraction.findById(req.params.id)
        .then((attraction)=>{
            attraction.name = req.body.name
            attraction.description = req.body.description
            attraction.website = req.body.website
            attraction.image = req.body.imageURL
            attraction.location = req.body.location
        })
    .catch((err) => {
        res.status(400).json(' Uh Oh ' + err)
    });
});



module.exports = router;