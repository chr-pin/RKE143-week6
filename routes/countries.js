const express = require('express');
const router = express.Router();
const data = require('../data/countries.json')

router.get('/', (req, res) =>{
    res.status(200).json(data)
})

router.get('/:countryid', (req, res) => {
    const country = data.countries.filter(countryinData => {
        if (countryinData.id.toString() === req.params.countryid){
            return countryinData
        }
    });
    res.status(200).json(country)
});

module.exports = router;