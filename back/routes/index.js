const router = require("express").Router()
const userRouter = require("./userRouter")
const favoritesRouter = require("./favoritesRouter")
const storagesRouter = require("./storagesRouter")

router.use("/user", userRouter);
router.use("/favorites", favoritesRouter);
router.use("/storages", storagesRouter)


module.exports = router