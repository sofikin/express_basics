const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
// add public directory
app.use(express.static('public'));
// add views directory path
app.set('views', path.join(__dirname, 'views'));
// add views template engine
app.set('view engine', 'ejs');

app.get('/questions', (req, res)=> {

    let questions = [
        {title: "What is Node.js?", user : "Kadi", votes : "10"},
        {title: "What is Express.js?", user : "Mike", votes : "8"}
    ]

    res.render('index', {questions:questions})
});

app.listen(port, ()=>{
    console.log('Server started on http://localhost:3000');
});

