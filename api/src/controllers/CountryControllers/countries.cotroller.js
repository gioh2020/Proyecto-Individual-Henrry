const {Country, Activity} = require("../../db")

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
                "timezones"
              ],
              include:{
                model: Activity,
                attributes:['name', 'difficulty', 'duration','season']
              }

        })
        return countries
    } catch (error) {
        throw  new Error(error.message)
    }
};

module.exports = {
getCountries,
}