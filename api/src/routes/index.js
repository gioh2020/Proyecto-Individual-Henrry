const { Router } = require('express');

const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const server = express()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// router.post("/users", async (req, res) => {
//     try {
//      const {name, id, flag, continet, capital, subregion, are, population} = req.body;
//      const newUser = await Country.create({name, id, flag, continet, capital, subregion, are, population});
//      res.status(201).send(newUser)
 
//     } catch (error) {
//      res.status(400).send(error.message)
//     }
//  })


module.exports = router;
