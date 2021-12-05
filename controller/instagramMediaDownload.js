const {validationResult} = require('express-validator')
const instagramGetUrl = require("../helpers/instagramGetUrl")


exports.getTheDownloadLink = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: errors.array()
        })
    }
    console.log(req.body.link)

    try{
        const downloadLinks = await instagramGetUrl(req.body.link)
        console.log(await instagramGetUrl(req.body.link))
        res.status(200).json({
            success: true,
            links: downloadLinks
        })
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error!!'
        })
    }
}