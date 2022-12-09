const {Country} = require("../../db")

const getCountries = async () => {
    try {
        const countries = await Country.findAll({
           attributes: [
                "id",
                "name",
                "flag",
                "continent",
                "capital",
                "subregion",
                "population",
                "area",
              ],

        })
        return countries
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
getCountries,
}