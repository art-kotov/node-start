const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.text());
// app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render('index', {title: "Home Page Title", message: "Home Page Header", location: "/"})
});

app.get('/about', (req, res) => {
    res.render('about', {title: "About Page Title", message: "About Page Header", location: "/about"});
    res.end()
});


app.post('/', (req, res) => {
    console.log(req.body);
    res.render('index', {title: "Home Page Title", message: "Home Page Header"})
});

app.listen(port, () => {
    console.log(`example listen on port: ${port}`)
});
