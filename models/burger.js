var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insert: function (value, cb) {
        orm.insertOne(value, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res);
        });
    }
}


module.exports = burger;