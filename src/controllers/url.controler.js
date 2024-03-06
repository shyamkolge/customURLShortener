import {URL} from '../models/url.model.js'
import shortid from 'shortid'
import {asyncHandler} from '../utils/asyncHandler.js'



const generateNewShortURL =  asyncHandler(async (req, res) =>{
   
    const body = req.body;

    if(!body.url) return res.status(400).json({message : "url is required"});

    const shortID = shortid();

    const user = await URL.create({
          shortId : shortID,
          redirectURL : body.url,
          visitHistory : []

    })

    return res.json({id : shortID})

})

const getAnalytics =  asyncHandler(async (req, res) =>{
   
    const shortID = req.params.shortID;

    const result = await URL.findOne({shortId : shortID});

    res.json({
        totoalClicks : result.visitHistory.length,
        analytics : result.visitHistory
    })
})

export {generateNewShortURL , getAnalytics}