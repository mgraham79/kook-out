const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllAtBeach: function(req,res){
    var object= {
      location: req.params.beach,
      available: true,
      instructor: true
    }
    db.User.find(object)
    .then(dbModel=> res.json(dbModel))
    .catch(err=>res.status(422).json(err))
  },

  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    let updateUserObject = {};
    console.log("updating")
    if(req.body.hasOwnProperty("instructor")){
    req.body.instructor= req.body.instructor.toString()}
    //if (req.body.username) updateUserObject.username = req.body.username;
    if (req.body.firstName) updateUserObject.firstName = req.body.firstName;
    if (req.body.lastName) updateUserObject.lastName = req.body.lastName;
    if (req.body.middleInitial) updateUserObject.middleInitial = req.body.middleInitial;
    if (req.body.password) updateUserObject.password = req.body.password;
    if (req.body.email) updateUserObject.email = req.body.email;
    if (req.body.picURL) updateUserObject.picURL = req.body.picURL;
    if (req.body.location) updateUserObject.location = req.body.location;
    if (req.body.exp) updateUserObject.exp = req.body.exp;
    if (req.body.ratingsAll) updateUserObject.ratingsAll = req.body.ratingsAll;
    if (req.body.reviewsAll) updateUserObject.reviewsAll = req.body.reviewsAll;
    if (req.body.reviewersFirstNameAll) updateUserObject.reviewersFirstNameAll = req.body.reviewersFirstNameAll;
    if (req.body.reviewersPictureAll) updateUserObject.reviewersPictureAll = req.body.reviewersPictureAll;
    if (req.body.reviewsDateAll) updateUserObject.reviewsDateAll = req.body.reviewsDateAll;
    if (req.body.board) updateUserObject.board = req.body.board;
    if (req.body.bio) updateUserObject.bio = req.body.bio;
    if (req.body.favBeaches) updateUserObject.favBeaches = req.body.favBeaches;
    if (req.body.reserved) updateUserObject.reserved = req.body.reserved;
    if (req.body.instructor) updateUserObject.instructor = req.body.instructor;
    if (req.body.available) updateUserObject.available = req.body.available;
    console.log(updateUserObject);
    db.User.findOneAndUpdate({ _id: req.params.id }, updateUserObject, {
      new: true
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
