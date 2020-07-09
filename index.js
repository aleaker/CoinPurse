const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const db = require("./config/db");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app.use(express.static("front/build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "front/build")));
}

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});

app.use("/api", require("./routes/index"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "front/build/index.html"));
});
