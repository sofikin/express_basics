const express = require('express');
const app = express();
const port = 3000;
// set up brother address row router
app.get('/', (req, res)=> {
// create html response
    res.send('<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a>');
});
app.get('/contact', (req, res)=>{
    res.send('<h1>Contact Us Page</h1>');
})

app.get('/about', (req, res)=> {
res.send('<h1>About Us Page</h1>');
})

app.get('*', (req, res)=>{
    res.send('404. This page does not exist. <a href="/">Go to Homepage</a>')
})
// listen app via port
app.listen(port, ()=>{
    console.log('Server started on http://localhost:3000');
});

