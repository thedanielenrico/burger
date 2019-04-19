var express = require("express");

var router = express.Router();

var burger = require("../models/burger");



router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);

    })
})
router.post("/api/burgers", function (req, res) {
    var value = req.body.newBurger;

    burger.insert(value, function (data) {
        res.json(data);
    })
    
});
router.put("/api/burgers/:id", function (req, res) {

    burger.updateOne(req.params.id, function(data){;
        res.status(200).end();

    })
})

module.exports = router;