// Simple Server Setup Using ExpressJS
const express = require('express')
const app = express()
const {
	join,
	resolve
} = require('path')
const port = process.env.PORT || 8080

const distDir = resolve(__dirname, 'dist')

app.use(express.static(distDir))

app.get('*', (req, res) => {
	res.sendFile(join(`${distDir}/index.html`))
})

app.listen(port, () => {
	console.log('Listening on port ' + port)
})