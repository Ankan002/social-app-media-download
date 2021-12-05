const {validationResult} = require('express-validator')
const ytdl = require('yt-mp3-dl')

exports.getYTAudio = async(req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: errors.array()
        })
    }

    try{
        const downloadLink = await ytdl((req.body.videoId).toString())
        res.status(200).json({
            success: true,
            downloadLink
        })
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error!'
        })
    }
}