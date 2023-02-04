require('dotenv').config()
const express = require('express')
const app = express()

const http = require('http').Server(app)
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
	res.end('alive')
})

http.listen(port, ()=> {
	console.log(`running on port ${port}`)
})
