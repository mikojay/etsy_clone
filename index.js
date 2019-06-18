const express = require('express')
const path = require('path')
const app = express()

// static for everything
app.use(express.static(path.join(__dirname, 'etsy_clone')))





app.listen(3000, () => {
	console.log('Server is responding to port 3000');
})
