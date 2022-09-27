const express = require('express');
const app = express();

const { db, Person, Place, Thing, Souvenir } = require("/db");

app.get('/', async (req, res, next) => {
    const people = await Person.findAll();
    const places = await Place.findAll();
    const Things = await Thing.findAll();

    res.send
})

const PORT = 3000;
app.listen(PORT, (test) => {
    console.log('connected to: ', PORT)
})