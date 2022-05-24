const express = require("express")
const app = express()
const port = 3002
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/templates/views'))


// Routes

app.get('/', (req, res) => {
    // All route functionality here
    res.render('index')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/user', (req, res) => {
    res.render('user')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})



// listener

app.listen(port, () => {
    console.log(`Server started at ${port}.`)
})