// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model.js");
// all your routes here

//GET TO RENDER FORM TO INPUT NEW CELEB
router.get("/celebrities/create", (req, res) =>
  res.render("celebrities/new-celebrity.hbs")
);
//POST SENDS FILLED OUT FORM TO ADD TO CELEB DB
router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch((error) => next(error));
});
//GET TO SHOW LIST OF CELEBS
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((allTheCelebs) => {
      res.render("/celebrities/celebrities.hbs", { celebrities: allTheCelebs });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
