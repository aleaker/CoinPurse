const router = require("express").Router();
const passport = require("../config/passport");
const User = require("../models/user");

router.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  User.create({ username, password, email })
    .then((user) =>
      req.logIn(user, (err) => {
        err ? console.log(err) : res.send(user);
      })
    )
    .catch((err) => res.send(err.errors[0].message));
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user).status(200);
});

router.get("/", (req, res) => {
  req.isAuthenticated()
    ? res.send(req.user).status(200)
    : res.send({ errorMsg: "Not authenticated" }).status(401);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get("/loggedUser", (req, res) => {
  res.send(req.user).status(200);
});

module.exports = router;
