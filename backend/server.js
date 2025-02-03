const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {   origin: "http://localhost:8081"};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



/* connect() DataBase  */
const db = require("./models");
const Role = db.role;
console.log(Role)
console.log("Role")



db.mongoose
  .connect(db.url, {  })
  .then(() => {
    console.log("--->-->>OK - DB Connected!");
    initial();
  })
  .catch(err => {
    console.log("Err! \n Cannot connect to the database!", err);
    process.exit();
  });


  

// simple route
app.get("/", (req, res) => {
  res.json({ message: "---> Welcome to platanova 78 application. <--- " });
});

 
require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/admin.routes")(app);




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {  console.log(`Server is running on port ${PORT}.`); });



async function initial () {
  console.log("\n\n initial")

  try {
    const count = await Role.estimatedDocumentCount();
    console.log('count = ', count)
    if (!count) {
      console.log('\n   создание Ролей\n')
      const admin = new Role( {
        value: 'ADMIN'
      })
      await admin.save()
      const owner = new Role( {
        value: 'OWNER'
      })
      await owner.save()
      const renter = new Role( {
        value: 'RENTER'
      })
      await renter.save()
      console.log('\n    РолI срздана=\n')
    }
  }
  catch (e) {
    console.log("\n\neerror initial =\n", e)
  }
}