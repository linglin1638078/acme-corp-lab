const Sequelize = require("sequelize");

const DB_URL = process.env.DB_URL || 'postgres://localhost/acme_people_places_things';//sequelize_roshambo
const db = new Sequelize(DB_URL);

const Person = db.define('person', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Place = db.define('place', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Thing = db.define('thing', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Souvenir = db.define('souvenir', {})

Person.hasMany(Souvenir);
Souvenir.belongsTo(Person);

Place.hasMany(Souvenir)
Souvenir.belongsTo(Place)

Thing.hasMany(Souvenir)
Souvenir.belongsTo(Thing)

module.exports = { db, Person, Place, Thing, Souvenir};