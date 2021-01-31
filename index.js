// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('data.json')
// const middlewares = jsonServer.defaults()
// let port = process.env.port || 4000

// server.use(middlewares)
// server.use(router)

// server.listen(port)



//step 1
//import express from 'express'
const express = require("express")
const app = express()

//step 3
const importData = require("./data.json")
//import importData from './data.json'
//step 1
let port = process.env.port || 4000

//step 2
app.get("/", (req, res) => {
    res.send("Hello World")
}) 

//step 3
app.get("/players", (req, res) => { 
    res.send(importData)
})

app.listen(port, () => {
    console.log('Example app is listening on http://localhost:${port}')
})

//step 4: make a new repository exd-api
//step 5: create .gitignore
//setp : create Procfile file - no extention
//step 6: follow instructions in github page on deploying repository
//step 7: type heroku login on command line
//step : in terminal heroku create my-app 8: type 'git push heroku main master' to push changes api from github to heroku
//step : heroku login 1) git init 2) git add . 3) git commit -m "first commit"  4) 'git push heroku main' or mastr