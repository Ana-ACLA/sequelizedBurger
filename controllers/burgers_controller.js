var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
//var Burger = require("../models/burger.js");
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };      
      // We have access to the todos as an argument inside of the callback function
      res.render("index", hbsObject);
    });

});

router.post('/', function(req,res){
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(){
    res.redirect('/');
  })
});


router.put("/:id", function(req, res) { 
  var condition = {
    devoured: req.body.devoured
  }  
  db.Burger.update(condition, {
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger) {
    console.log(dbBurger);
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger) {
    console.log(dbBurger);
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
