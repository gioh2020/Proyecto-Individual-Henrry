const { Router } = require('express');
const countryRouter = require('./countryRouters/routes.country');
const idCountryRouter = require('./countryRouters/idCountry.route');
const activityRouter = require('./activity.route');



const router = Router();


router.use('/countries', countryRouter);
router.use('/countries', idCountryRouter)
router.use('/activities', activityRouter)

// router.use('/activity', activityRouter);

module.exports = router;
