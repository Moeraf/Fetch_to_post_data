const bodyParser = require('body-parser');
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/addStudent', (req, res) => {
    console.log(req.body.studentName);
    res.send('adding successful');
})

app.listen(3000)