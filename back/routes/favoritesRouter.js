const router = require("express").Router();
const User = require("../models/user");
const Favorite = require("../models/favorite");

router.get("/fetchFavorites", (req, res) => {
  Favorite.findAll({ where: { UserId: req.user.id } }).then(favorites =>
    res.send(favorites)
  );
});

router.post("/addFavorite", (req, res) => {
  Favorite.findOne({
    where: { UserId: req.user.id, name: req.body.name }
  }).then(exists => {
    !!exists
      ? res.send("Already following the asset")
      : User.findByPk(req.user.id).then(user => {
          Favorite.create(req.body)
            .then(fav => user.addFavorite(fav))
            .then(() => res.sendStatus(201));
        });
  });
});

router.delete("/deleteFavorite", (req, res) => {
  Favorite.findOne({ where: { UserId: req.user.id, name: req.body.coinName } })
    .then(fav => fav.destroy())
    .then(() => res.sendStatus(204));
});

module.exports = router;
