const router = require('express');
const { Signup } = require('../controllers/Signup');
const { Login } = require('../controllers/Login');
const { getProduct } = require('../controllers/product');
const { getcartdata } = require('../controllers/cart/getcartdata');
const { addcartdata } = require('../controllers/cart/addtocart');
const { removecartdata } = require('../controllers/cart/removefromcart');
const { authorisation } = require('../middlewares/Authorisation');


const allRoutes = router();

allRoutes.post('/Signup',Signup);
allRoutes.post('/Login',Login);
allRoutes.get('/getproducts',getProduct);
allRoutes.get('/getcartdata',authorisation,getcartdata);
allRoutes.post('/addtocort',authorisation,addcartdata);
allRoutes.get('/removecartdata',authorisation,removecartdata);
allRoutes.post('/removecartdata',authorisation,removecartdata);


module.exports ={  
    allRoutes
}