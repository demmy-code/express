const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/age', (req, res) => {
  res.send('User is 25 years old')
})

app.get('/user/age/date', (req, res) => {
  res.send('User registered his age on 2020-01-01')
})

app.post('/user', (req, res) => {
  res.send('This is a new user')
})

app.post('/user/name', (req, res) => {
  res.send('The  name of the user is Demi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

