const { STRING, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../db');

const Person = db.define('person', {
  id: {
    primary: true,
    type: UUID,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    allowEmpty: false,
  },
});

module.exports = Person;
