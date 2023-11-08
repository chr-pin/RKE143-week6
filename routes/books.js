const express = require('express');
const router = express.Router();
const data = require('../data/books.json')

router.get('/', (req, res) =>{
    res.status(200).json(data)
})

router.get('/:bookid', (req, res) => {
    const book = data.books.filter(bookinData => {
        if (bookinData.id.toString() === req.params.bookid){
            return bookinData
        }
    });
    res.status(200).json(book)
});

module.exports = router;