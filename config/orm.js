var connection = require("../config/connection.js");


var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    insertOne: function (value, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [value], function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    updateOne: function (id, cb) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", id, function (err, result) {
            if (err) throw err;

            cb(result);
        })
    }
};

module.exports = orm;