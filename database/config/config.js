require("dotenv").config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "skillnav_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
  },

  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "skillnav_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
  },

  "production": {
    "username": "postgres",
    "password": "postgres",
    "database": "skillnav_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
  },
};
