const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const db = require("../back/config/db");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(
  session({ secret: "cualquierCosa", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

db.sync({ force: false }).then(() => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

app.use("/api", require("./routes/index"));



app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
