
router.get('/countries', async (req,res)=> {
    const {name} = req.query;
    const countries = await Country.findAll({
        attributes: { exclude: ['id'] }
       }

    );
    try { 
        if (name) 
            {countries = countries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
            if (countries.length === 0){return res.status(404).send('Country not found')};
        };
        return res.status(200).send(countries);


    } catch (error) {
        return res.status(400).send('Countries could not load properly');
    }
});