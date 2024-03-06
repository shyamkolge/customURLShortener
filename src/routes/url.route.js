import { Router } from "express";
import { generateNewShortURL, getAnalytics } from "../controllers/url.controler.js";

const route = Router()


route.post("/" , generateNewShortURL)

route.get('/analytics/:shortID' , getAnalytics )

export default route