const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.post('/login',(req,res) => {
  console.log(req.body)
  res.send('login')
})

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/help', (req, res) => {
    res.send('Help me')
  })

  app.get('/oops', (req, res) => {
    res.send('uh ohhhh')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})