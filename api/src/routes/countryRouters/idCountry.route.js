const {Router} = require('express')
const getIdCountry = require("../../controllers/CountryControllers/IdCountry.controller")
const router = Router();


router.get('/:id', async (req,res)=> {
    const {id} = req.params
   try {
    const country = await getIdCountry(id);
    if(id){
        res.status(200).send(country);
    }
    
   } catch (error) {
    res.status(400).send(error)
   }
});

module.exports = router