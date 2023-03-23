"use strict";
var mongoose = require("mongoose");
// User = mongoose.model("Users");
// Login = mongoose.model("Login");
var { User, Login } = require("../models/contactModel");
var md5 = require('md5');

exports.login = function(req, res) {
  const { username, password } = req.body;
  console.log(username)
  console.log(password)
  // Check if the username and password are valid
  Login.findOne({ username: username, password: password }, function(err, user) {
    
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    if (!user) {
      res.status(401).send('Invalid credentials');
      return;
    }

    res.send('Login successful');
  });
};


exports.deleteContact = function (req, res) {
  //console.log(req.params.userId)
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) {
      //throw err
      res.status(500).send("Error deleting contact");
      return;
    }
    const response = {
      message: "Delete user id: " + req.params.id + " successfully",
    };
    res.json(response);
  });
};


exports.updateContact = function (req, res) {
	console.log(req.params.userId)
	var newUser = {}
	newUser.firstName = req.body.firstName
	newUser.lastName = req.body.lastName
	newUser.mobile = req.body.mobile
	newUser.email = req.body.email
	newUser.facebook = req.body.facebook
	newUser.imgurl = req.body.imgurl
	console.log(newUser)
	User.findByIdAndUpdate(req.params.userId, newUser, { new: true }, function (err, user) {
		if (err){ 
			//throw err
			res.status(500).send('Error updating contact');
		}
		console.log(user)
		res.json(user)
	})
}


exports.listAllUsers = function (req, res) {
  // var query = { sort: { firstName: 1 } };
  var query = {};
  User.find({}, null, query, function (err, user) {
    if (err) throw err;
    //console.log(user)
    res.json(user);
  });
};

exports.createAUser = function (req, res) {
  var newUser = new User(req.body);
  console.log(req.body);
  newUser.save(function (err, user) {
    if (err) throw err;
    res.json(user);
  });
};



exports.searchContact = function (req, res) {
  const search = req.params.search;
  User.find({
    $or: [
      { firstName: { $regex: search, $options: "i" } },
      { lastName: { $regex: search, $options: "i" } },
    ],
  })
    .then((contacts) => {
      res.send(contacts);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Internal server error");
    });
};
