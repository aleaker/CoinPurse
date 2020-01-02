const router = require("express").Router();
const User = require("../models/user");
const Favorite = require("../models/favorite");

router.post("/addFavorite", (req, res) => {
  Favorite.findOne({
    where: { UserId: req.user.id, name: req.body.name }
  }).then(exists => {
    !!exists
      ? res.send("Already following the asset")
      : User.findByPk(req.user.id).then(user => {
          user.addFavs(req.body);
        });
  }).then(res=>res.send("listo"))
});

router.get("/fetchFavorites",(req,res)=>{
    Favorite.findAll({where:{UserId:req.user.id}}).then(favorites=>res.send(favorites))
})
//User.findByPk(req.user.id).then(user=>{user.addFavs(req.body)})

// router.put('/editFavorite',(req,res)=>{console.log("body",req.body.coinName)
// User.findByPk(req.user.id).then(user=>console.log("usuario a editar",user))
// })

module.exports = router;
