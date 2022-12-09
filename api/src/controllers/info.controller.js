const axios = require("axios")
const {Country} = require("../db")


const getApiAllInfo = async () => {
    try {
        const getCountriesInfoFromApi = await axios.get('https://restcountries.com/v3/all');


        const countriesInfo = getCountriesInfoFromApi.data.map((country) => {
           
            return{
                name: country.name.common,
                id: country.cca3,
                flag: country.flags[0],
                continent: country.region,
                capital: country.capital ? country.capital[0] : "Don't has capital",
                subregion: country.subregion ? country.subregion :"Don't has subregion",
                area: country.area,
                population: country.population,
            };
            
        });
        
        await Country.bulkCreate(countriesInfo);  
        
    } catch (error) {
        console.log(error)
        
    }
    
    
}




module.exports = {
    getApiAllInfo
     
   };