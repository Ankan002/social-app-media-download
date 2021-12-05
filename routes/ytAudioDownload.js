const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const {getYTAudio} = require('../controller/ytAudioDownload')


router.get('/yt/download/audio', [
    body('videoId').isLength({min: 1}).withMessage("Please send some video id")
], getYTAudio)


module.exports = router