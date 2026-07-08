const {Router}= require("express")
const route = Router();
const { handleUserSignIn, handleUserLogin } = require("../controllers/auth");

route.post('/register', handleUserSignIn)
route.post('/login', handleUserLogin)

module.exports= route;
