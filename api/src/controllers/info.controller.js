const axios = require("axios")
const {Country} = require("../db")


const getApiAllInfo = async () => {
    try {
        const getCountriesInfoFromApi = await axios.get('https://restcountries.com/v3/all');
        const allCountries = await Country.findAll()
        
        if(allCountries.length == 250){
            return

        }else{

            const countriesInfo = getCountriesInfoFromApi.data.map((country) => {
    
                const countryName = country.name.common.replace("Å", "A")
                return{
                    name: countryName,
                    id: country.cca3,
                    flag: country.flags[0],
                    continent: country.region,
                    capital: country.capital ? country.capital[0] : "Don't has capital",
                    subregion: country.subregion ? country.subregion :"Don't has subregion",
                    area: country.area,
                    population: country.population,
                    timezones: country.timezones? country.timezones[country.timezones.length-1]: undefined,
                }    
                
            });
            
            await Country.bulkCreate(countriesInfo);  
        }
        
    } catch (error) {
        throw  new Error(error.message)
        
    }
    
    
}




module.exports = {
    getApiAllInfo
     
   };