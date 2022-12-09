const {Country} = require("../../db");
const { Op } = require("sequelize");

const getInfoByName = async (name) => {
    try {
        const country = await Country.findAll({
            where: {
                name: {
                  [Op.iLike]: `%${name}%`,
                },
              },
        })
        if(country.length){
            return country
        }
        throw new Error('country does not exist')
          
    } catch (error) {
        throw error.message
    }
}

module.exports = getInfoByName;