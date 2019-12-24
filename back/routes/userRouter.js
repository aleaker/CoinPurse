const router = require("express").Router();
const passport = require("../config/passport");
const User = require("../models/user");

router.post("/register", (req, res) => {
  const username = req.body.registerUsername;
  const password = req.body.registerPassword;
  const email = req.body.email;
  User.create({ username, password, email }).then(user =>
    req.logIn(user, err => {
      err ? console.log(err) : res.send(user);
    })
    )
    .catch(err=>res.send(err.errors[0].message))
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user);
});

router.get("/", (req, res) => {
  req.isAuthenticated() ? res.send(req.user) : res.sendStatus(401);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.get("/loggedUser", (req, res) => {
  res.send(req.user)
});

module.exports = router;
