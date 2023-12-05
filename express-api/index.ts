import express from 'express';

console.log('hello');

//const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(201).json({
    ok: true,
    msg: 'token for response: 001'
  })

  // res.json(
  //   {
  //       ok: "okokok"
  //   }
  // )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})