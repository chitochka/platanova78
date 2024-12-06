const config = require("../config/auth.config");
const db = require("../models");
const UserModel = db.user;
const RoleModel = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
console.log(' \nstart auth.controller.js')

exports.checkEmail = (req, res) => {
  console.log('  ReQ ='); console.log(req.body)
  res.send({
    exist: false
  });
}


exports.signup = (req, res) => {
  console.log("\n\n\n  ====------>>>   >>   S I G N    U P   <<   <<<<--=====")

  const user = new UserModel( {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    apartNum: req.body.apartNum,
    telefon: req.body.telefon,
    vlastnik: req.body.vlastnik
  });


  user
  .save(user)
  .then(data => {
    console.clear()
    RoleModel.findOne({
      value: req.body.vlastnik.toLowerCase() === 'true' ? "OWNER": "RENTER"
    })
    .then((role) => {
      user.roles = [role._id];

      user
      .save(user)
      .then(data => {
        console.log('  ULOZENO vc  ROLE =', user.roles)
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || " -=-=-=-=-=-= Chyba behem ulozeni data User  ! "
        });
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
      message: err.message || "Vyskytla Chyba behem ulozeni data User  ! "
    });
  });

};




exports.signin = (req, res) => {
  console.log("\n\n\n  ==---->>>>>   S I G N    I N    <<   <<<<----======")
  UserModel.findOne({
    email: req.body.email
  })
  .populate("roles", "-__v")
  .exec()
  .then(user => {
    console.log(' ----  EXEC ---------\n user=')
    console.log(user)

    if (!user) {
      return res.status(404).send({
        message: "User Not found."
      });
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    console.log('passwordIsValid = ', passwordIsValid)

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({
      id: user.id
    },
      config.secret,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      });

    var authorities = [];
    for (let i = 0; i < user.roles.length; i++) {
      authorities.push("ROLE_" + user.roles[i].value.toUpperCase());
    }

    console.log('!!!!!!!!!!!!!!!!!!')
    console.log('\n\authorities = \n ', authorities)

    res.status(200).send({
      id: user._id,
      email: user.email,
      roles: authorities,
      accessToken: token
    });
  })

  .catch(err => {
    res.status(500).send({
      message: err.message || "Vyskytla Chyba behem prihlaseni data User  ! "
    });
  });

};