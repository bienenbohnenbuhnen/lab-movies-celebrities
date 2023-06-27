// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model.js");
// all your routes here

//GET TO RENDER FORM TO INPUT NEW MOVIE
router.get("/movies/create", (req, res) => res.render("movies/new-movie.hbs"));

//POST FILLED OUT MOVIE FORM
router.post("/movies/create", (res, req, next) => {
  const { title, genre, plot, cast } = req.body;

  Movie.create({ title, genre, plot, cast })
    .then(() => res.redirect("/movies"))
    .catch((error) => next(error));
});

//GET TO SHOW LIST OF MOVIES
router.get("/moves", (req, res) => {
  Movie.find()
    .then((allTheMovies) => {
      res.render("/movies/movies.hbs", { movies: allTheMovies });
    })
    .catch((error) => {
      next(error);
    });
});
module.exports = router;
