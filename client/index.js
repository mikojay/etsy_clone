const express = require('express')
const path = require('path')
const app = express()

// static for everything
app.use(express.static(path.join(__dirname, 'client')))

app.get('/shop', (req, res) => {
	res.sendFile(path.join(__dirname, '/shop.html'))
})



app.listen(3000, () => {
	console.log('Server is responding to port 3000');
})
