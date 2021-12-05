const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const {getTheDownloadLink} = require('../controller/instagramMediaDownload')

router.get('/instagram/media', [
    body('link').isLength({min: 1}).withMessage('The given link is empty')
], getTheDownloadLink)




module.exports = router