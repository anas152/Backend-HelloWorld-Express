import express from 'express'
const app = express()
const port = process.env.PORT ||  3000;

app.get('/', (req, res) => {
  res.send('Hello World! From ANAS day 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})