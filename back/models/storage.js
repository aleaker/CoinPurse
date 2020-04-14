const S = require("sequelize");
const db = require("../config/db");

class Storage extends S.Model { }

Storage.init({
    
    amount:{
        type:S.FLOAT
    },
    storageName:{
        type:S.STRING
    },
    pk:{
        type:S.INTEGER
    },
    date:{
        type:S.DATE
    },
    coinId:{
        type:S.STRING
    }

},{sequelize:db, modelname:'storage'})

module.exports = Storage;