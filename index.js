const express = require('express')
const path = require('path')
const app = express()

app.listen(3000, () => {
	console.log('Server is responding to port 3000');
})
app.get('/shop',(req,res)=> {
	res.sendFile(path.join(__dirname, '/etsy_clone/space.txt'))
	console.log('__dirname', __dirname);
})

// res.sendFile(path.join(__dirname, '/client/profile.txt'))
// 	console.log('__dirname', __dirname)
// })
