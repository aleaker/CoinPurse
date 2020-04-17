const router = require("express").Router();
const User = require("../models/user");
const Favorite = require("../models/favorite");
const Storage = require("../models/storage");

router.get("/fetchStorages", async (req, res) => {
  console.log(req.user.id);
  try {
    let storages = await Storage.findAll({ where: { UserId: req.user.id } });
    storages.length ? res.send(storages) : res.sendStatus(204);
  } catch (error) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", error);
  }
});

router.post("/addStorage", async (req, res) => {
  console.log(req.body);
  
  try {
    // let storage = await Storage.findOne({
    //   where: {
    //     UserId: req.user.id,
    //     coinId: req.body.coinId,
    //     storageName: req.body.storageName,
    //   },
    // });
    // if (!!storage) {
    //   res.send("Storage already exists, please use another name");
    // } else {
      let user = await User.findByPk(req.user.id);
      let storage = await Storage.bulkCreate(req.body);
      user.addStorage(storage);
      res.sendStatus(201);
    //}
  } catch (e) {
    console.log(e);
  }
});

router.delete("/deleteStorage", async (req, res) => {
  console.log(req.body.id);
  try {
    let storage = await Storage.findOne({ where: { id: req.body.id } });
    await storage.destroy();
    res.sendStatus(204);
  } catch (e) {
    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEE", e);
    res.send("Problem on delete");
  }
});
module.exports = router;
