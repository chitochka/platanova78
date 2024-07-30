const db = require("../models");
const User = db.user;

// Create and Save a new user
exports.create = (req, res) => {
    console.log("CREATED");
    // TODO Validate request
/*    if (!req.body.email) {
      res.status(400).send({ message: "email / Content can not be empty!" });
      return;
    }
*/  
    // Create a user 
    const user = new User({
      email : req.body.email,
      password: req.body.password,
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      apartNum : req.body.apartNum,
      telefon: req.body.telefon,
      vlastnik: req.body.vlastnik 
    });
  
    // Save user in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Vyskytla Chyba behem ulozeni data User  ! "
        });
      });
  };




// Find a email with an id
exports.findOne = (req, res) => {
    const email = req.params.email;
  
    User.find({email:email})
      .then(data => {
        if (!data.length)
          res.status(404).send({ message: "Not found USER's EMAIL =" + email });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Chyba 500 email=" + email });
      });
    };
