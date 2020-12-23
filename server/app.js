const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const port = process.env.PORT || 3000
const LocationController = require('./controllers/LocationController')

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(port, ()=>{
    console.log(`app running on port: ${port}`);
})