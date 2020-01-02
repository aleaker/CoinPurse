const router = require("express").Router()
const userRouter = require("./userRouter")
const favoritesRouter = require("./favoritesRouter")

router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);


module.exports = router