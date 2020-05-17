const router = require("express").Router();
const User = require("../models/user");
const Favorite = require("../models/favorite");


router.get("/fetchFavorites", (req, res) => {
  console.log(req.user.id )
  Favorite.findAll({ where: { UserId: req.user.id } }).then(favorites =>
    res.send(favorites)
  );
});

router.post("/addFavorite", (req, res) => {
  Favorite.findOne({
    where: { UserId: req.user.id, coinId: req.body.coinId }
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

router.delete("/deleteFavorite", async (req, res) => {
  try{
    let fav = await Favorite.findOne({ where: { UserId: req.user.id, coinId: req.body.coinId } })
    await fav.destroy();
    res.sendStatus(204);
  }catch(e){
    console.log(e);
}

});

module.exports = router;
