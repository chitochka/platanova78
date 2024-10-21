var  env = require('dotenv').config()
const DB_HOME_PC= process.env.DB_HOME_PC 

console.log('DB = ' ,  DB_HOME_PC ? "HOME LOCALE DB ":" ONLINE ")
const url = DB_HOME_PC 
  ? "mongodb://localhost:27017/platanova78"
  : "mongodb+srv://alex:alex@cluster0.zyelpcb.mongodb.net/platanova78"

module.exports = {
  url
};
