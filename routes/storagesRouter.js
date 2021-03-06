const router = require("express").Router();
const User = require("../models/user");
const Favorite = require("../models/favorite");
const Storage = require("../models/storage");

router.get("/fetchStorages", async (req, res) => {
  console.log(req.user.id);
  try {
    let storages = await Storage.findAll({ where: { UserId: req.user.id } });
    storages.length
      ? res.send(storages).status(201)
      : res.send({ errorMsg: "No storages found" }).status(204);
  } catch (error) {
    console.log(error);
  }
});

router.post("/addStorage", async (req, res) => {
  req.body;

  try {
    let user = await User.findByPk(req.user.id);
    let storage = await Storage.bulkCreate(req.body);
    user.addStorage(storage);
    res.sendStatus(201);
  } catch (e) {
    res.send({ errorMsg: "Not created" }).status(409);
  }
});

router.delete("/deleteStorage", async (req, res) => {
  console.log(req.body.id);
  try {
    let storage = await Storage.findOne({ where: { id: req.body.id } });
    await storage.destroy();
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.send({ errorMsg: "Problem on delete" }).status(409);
  }
});

module.exports = router;
