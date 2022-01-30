const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/login', (req, res)=> {
    res.render('login');
});

app.post('/login', (req, res)=> {
let username = req.body.username;
let password = req.body.password;

if(username === 'user' && password === 'qwerty'){
    res.redirect('/dashboard')
}
});

app.get('/dashboard', (req, res)=> {
    res.render('dashboard');
})

app.listen(port, ()=>{
    console.log('Server started on http://localhost:3000');
});

