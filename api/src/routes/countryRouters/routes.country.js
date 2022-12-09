const {Router} = require('express')
const {getCountries} = require("../../controllers/CountryControllers/countries.cotroller")

const getInfoByName = require("../../controllers/CountryControllers/nameCountry.controller")
const router = Router();


router.get('/', async (req,res)=> {
    const {name} = req.query
  
   try {
    if(!name){
        const countries = await getCountries()
        res.status(200).json(countries)
    }else{
        const country = await getInfoByName(name)
        res.status(200).json(country)
    } 
   } catch (error) {
    res.status(400).json(error)
   }
});





module.exports = router;