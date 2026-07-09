const { Router } = require("express");
const { handleGenerateShortUrl, handleReturnAllUrl, handleDeleteUrl,handleRedirectUrl, handleGetAnalytics} = require("../controllers/url");
const checkForAuthentication = require("../middlewares/auth")
const router = Router();


router.post('/shorten',checkForAuthentication,handleGenerateShortUrl);
router.get("/all", checkForAuthentication, handleReturnAllUrl);
router.delete('/:shortId',checkForAuthentication,handleDeleteUrl);
router.get("/:shortId", handleRedirectUrl);
router.get('/analytics/:shortId',checkForAuthentication,handleGetAnalytics )

module.exports= router;