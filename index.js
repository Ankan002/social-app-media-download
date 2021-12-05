require('dotenv').config()
const express = require('express')
const cors = require('cors')

const ytRoutes = require('./routes/ytAudioDownload')
const instagramRoutes = require('./routes/instagramMediaDownload')

const app = express()

const PORT = process.env.PORT


app.use(cors())
app.use(express.json())


app.use('/api', ytRoutes)
app.use('/api', instagramRoutes)



app.listen(PORT, () => console.log(`Running at port: ${PORT}`))