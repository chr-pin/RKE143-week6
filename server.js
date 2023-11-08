const express = require('express');
const port = 3000;
const app = express();
const booksrouter = require('./routes/books')
const countriesrouter = require('./routes/countries')


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.sendStatus(200)
    //res.status(500).json({message: "internal error. try again later"})
    res.render('index')
});

app.use('/books', booksrouter);

app.use('/countries', countriesrouter);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
});