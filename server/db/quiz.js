const Sequelize = require('sequelize');
const db = require('./db');

const Quiz = db.define('quiz', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Quiz;
