const {Router} = require("express")
const postActivity = require("../controllers/activity.controller")

const router = Router();

router.post("/", async (req,res) => {
    try {
        const activityData = req.body;
        const activity = await postActivity(activityData)
        res.status(200).json(activity)
        
    } catch (error) {
       
        res.status(400).send(error.message)
        
    }

})

module.exports = router;