const { db, Person, Place, Thing, Souvenir } = require('./db');



const seedDb = async () => {
    await db.sync({ force: true, logging: false });

    const people = [
        {
            name: 'Moe'
        },
        {
            name: 'Larry'
        },
        {
            name: 'Lucy'
        },
        {
            name: 'Ethyl'
        }
        
    ]

    const places = [
        {
            name: 'Paris'
        },
        {
            name: 'Chicago'
        },
        {
            name: 'NYC',
        },
        {
            name:'London'
        }
    ]
    
    const things = [
        {
            name: 'hat'
        },
        {
            name: 'bag'
        },
        {
            name: 'cup'
        },
        {
            name: 'shirt'
        }
        
    ]

    const peoplePromise = people.map((person) => Person.create(person));
    const [moe, larry, lucy, ethyl] = await Promise.all(peoplePromise);

    const placesPromise = places.map((place) => Place.create(place));
    const [paris,chicago,nyc,london] = await Promise.all(placesPromise);

    const thingsPromise = things.map((thing) => Thing.create(thing));
    const [hat, bag, cup, shirt] = await Promise.all(thingsPromise);

    console.log(
        (await Person.findAll()).map(person => person.name)
    );
    console.log(
        (await Place.findAll()).map(place => place.name)
    );
    console.log(
        (await Thing.findAll()).map(thing => thing.name)
    );
}

seedDb();