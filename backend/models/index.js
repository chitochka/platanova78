const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")
db.role = require("./role.model.js");


console.log(' \n\n--- ---db.role =')
console.log(db.role)


console.log(' \n\n--- ---db.user =')
console.log(db.user)


db.ROLES = ["user", "admin", "moderator"];
module.exports = db;