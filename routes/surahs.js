const express = require('express');
const router = express.Router();

// import models
const Sura = require('../models/Sura')
const Text = require('../models/Text')


//Get index page
router.get('/', async (req, res) => {
    let surahs = await Sura.find().sort('number');
    res.render('index', {
        surahs: surahs
    })
})


//Get single sura page
router.get('/:surah_number', async (req, res) => {
    let number = req.params.surah_number;
    let surahs = await Sura.findOne({
        number
    });
    let texts = await Text.find({
        surah_number: number
    }).sort('verse_number');
    res.render('sura', {
        texts: texts,
        surahs: surahs,
    })
})

//exports
module.exports = router;