const S = require("sequelize");
const db = require("../config/db");

class Favorite extends S.Model { }

Favorite.init({
    coinId:{
        type:S.STRING
    },
},{sequelize:db, modelname:'favorite'})

module.exports = Favorite;