const {Activity, Country} = require("../db");

const postActivity = async (activityData) => {
    const {idCountry, name, difficulty, duration, season, img, description} = activityData

    const searchActivity = await Activity.findAll({
        where: {name: name}
    }) 
    
    const searchActivityInCountry = await Country.findByPk(idCountry.toUpperCase(),{
        attributes: ["id"],
          include:{
            model: Activity,
            where: {name: name},
            attributes: ["name"]
          }
    })
   if(!searchActivity.length){
       const activity = await  Activity.create({name, difficulty, duration, season, img, description});
           
           const countryId = await Country.findAll({
               where:{id: idCountry}, 
            });
       await activity.addCountries(countryId);
       return activity;
   }else{
        if(!searchActivityInCountry){
            const countryId = await Country.findAll({
                where: {id: idCountry}
            });
            await searchActivity[0].addCountries(countryId);
            return searchActivity[0];

        }else{
            throw new Error('The country already has the activity')
        }
   } 
}



module.exports = postActivity;
