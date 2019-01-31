const db = require("../models");

// Defining methods for the MoviesController
module.exports = {
    find: function(req, res) {
    db.Movie
      .find(req.params.title)
      .then(boxofficedb => res.json(boxofficedb))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Movie
      .create(req.body)
      .then(boxofficedb => res.json(boxofficedb))
      .catch(err => res.status(422).json(err));
  }
};
