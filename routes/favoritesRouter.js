const router = require("express").Router();
const User = require("../models/user");
const Favorite = require("../models/favorite");

router.get("/fetchFavorites", async (req, res) => {
  const favorites = await Favorite.findAll({ where: { UserId: req.user.id } });
  if (!!favorites) {
    res.send(favorites).status(200);
  } else {
    res.send({ errorMsg: "Your are not following any asset" }).status(204);
  }
});

router.post("/addFavorite", async (req, res) => {
  const favorite = await Favorite.findOne({
    where: { UserId: req.user.id, coinId: req.body.coinId },
  });
  if (!!favorite) {
    res.send({ errorMsg: "Already following the asset" }).status(406);
  } else {
    const user = await User.findByPk(req.user.id);
    const fav = await Favorite.create(req.body);
    user.addFavorite(fav);
    res.sendStatus(201);
  }
});

router.delete("/deleteFavorite", async (req, res) => {
  try {
    let fav = await Favorite.findOne({
      where: { UserId: req.user.id, coinId: req.body.coinId },
    });
    await fav.destroy();
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
