import express from 'express'
import urlRoute from '../src/routes/url.route.js'
import { URL } from './models/url.model.js';
import { asyncHandler } from './utils/asyncHandler.js';


const app = express()


app.use(express.json());


app.use('/url' , urlRoute)

app.get('/:shortId', asyncHandler(async (req, res) =>{
   
    const shortID = req.params.shortID;

    const entry = await URL.findOneAndUpdate({
       shortID
      },{ $push : {
            visitHistory : {
                timestamp : Date.now()
            },
       }})

    //   res.redirect(entry.redirectURL);
    res.redirect(entry.redirectURL)

}))

export{app}