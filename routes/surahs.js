const express = require('express');
const router = express.Router();

// import Surahs model
const Surahs = require('../models/Surahs')
//import Sahih International + arabic model
const SI = require('../models/SI')
//import Bangla Translation model
const BN = require('../models/BN')
//import Yousuf Ali Translation model
const YA = require('../models/YA')

//Get index page
router.get('/', async (req, res) => {
    let surahs = await Surahs.find().sort('number');
    res.render('index', {
        surahs: surahs
    })
})


//Get single sura page
router.get('/:surah_number', async (req, res) => {
    try {
        let number = parseInt(req.params.surah_number);
        let surahs = await Surahs.findOne({
            number
        });

        // si for sahih internatial + arabic
        let si = await SI.find({
            surah_number: number
        }).sort('verse_number');

        // bn for bangla translation
        let bn = await BN.find({
            sura: number
        }).sort('aya');

        // ya for yousuf ali translation
        let ya = await YA.find({
            sura: number
        }).sort('aya');

        res.render('sura', {
            si: si,
            bn: bn,
            ya: ya,
            surahs: surahs,
        })
    } catch (err) {
        res.sendStatus('404');// default error
    }
})

//exports
module.exports = router;