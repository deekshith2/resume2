const express = require('express')
const app = express()
const port = process.env.PORT||3000

app.get('/', (req, res) => res.sendFile(__dirname + '/public/html/start.html'))

app.get('/resume', (req, res) => res.sendFile(__dirname + '/public/html/resume.html'))
app.get('/login', (req, res) => res.sendFile(__dirname + '/public/html/login.html'))
app.get('/signup', (req, res) => res.sendFile(__dirname + '/public/html/signup.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))