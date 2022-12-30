const {Country, Activity} = require("../../db")


const getIdCountry = async (id) =>{
    try {
        const country = await Country.findByPk(id.toUpperCase(),
        {
            where:{id: id},
              include: [{
                model: Activity,
                attributes: ["id", "name", "difficulty", "duration", "season", "img","description" ],
          
              }]
        },
        )
        
        if(country){
            return country
        }else{
            throw new Error('country does not exist')
        }
    } catch (error) {
        throw error.message
        
    }

}

module.exports = getIdCountry