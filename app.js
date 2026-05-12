const express = require('express')
const app = express()
const port = 3000

app.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') {
    return next('route')
  }
  res.send(`User ${req.params.id}`)
})

app.get('/user/:id', (req, res) => {
  res.send('Special handler for user ID 0')
})

app.get('/user', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/age', (req, res, next) => {
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


const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

