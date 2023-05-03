const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../db/postgres');

const editorials = sequelize.define('editorials', {
  name: {
    type: DataTypes.STRING,
      allowNull: false
  }
}, {
  timestamps: true
});



module.exports = editorials;