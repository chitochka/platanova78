
const db = require("../models");
const UserModel = db.user;
const RoleModel = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
 

exports.signup =   (req, res) => {
  console.log("\n\n\n  ====--------->>>   >>   S I G N    U P   <<   <<<<------=======")
  
  
  const user = new UserModel({
        email : req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        apartNum : req.body.apartNum,
        telefon: req.body.telefon,
        vlastnik: req.body.vlastnik
      });


    user
      .save(user)
      .then(data => {
        console.clear()

        RoleModel.findOne({ 
                value: req.body.vlastnik.toLowerCase() === 'true' ? "OWNER" : "RENTER"
            })
            .then( (role)=>  {
            user.roles = [role._id];

            user
                .save(user)
                .then(data => {
                    console.log('  ULOZENO vc  ROLE =', user.roles)
                    res.send(data);
                })
                .catch(err => {
                  res.status(500).send({
                    message:            err.message || " -=-=-=-=-=-= Chyba behem ulozeni data User  ! "        });
                });
            /*
              user.save(err => {
                if (err) { res.status(500).send({ message: err }); return;              }
                res.send({ message: "UserModel ulozen!" });
              });
           */
          });
          console.log('\n\n -------------- res.send(data) -------\n')

      })
      .catch(err => {
        res.status(500).send({
          message:            err.message || "Vyskytla Chyba behem ulozeni data User  ! "        });
      });
 
};
