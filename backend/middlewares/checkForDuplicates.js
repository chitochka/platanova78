const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
console.clear()
console.log('  ROLES  ROLES  ROLES    ROLES')
console.log(ROLES)
//////////

checkDuplicateEmailOrTelefon = (req, res, next) => {
  console.log('/n/n ----- check  Email + TELEFON =', req.body.email)
  User.findOne({
    $or: [{
      email: req.body.email
    },
      {
        telefon: req.body.telefon
      }]})
  // Username
  /* User.find( {
    email: req.body.email,
  })
  */
  .exec()
  .then(user => {
    console.log('\n\n- CHECK THEN-->  USER- EMAIL.\n user= '); console.log(user)
    if (user) {
      // let dublicate = user.email === req.bo
      res.status(400).send({
        //message: "Failed!- Email / Mobil EXIST!"
        message: `Failed!-
        ${user.email === req.body.email ? 'Email': ''}
        ${user.telefon === req.body.telefon ? 'Telefon': ''}
        EXIST!`
      });
      return;
    }
    next();
  })
  .catch(e => {
    console.err('    ОЩИБКА =', e)
    res.status(500).send({
      message: err
    });
  })
};


/////////////
checkDuplicateUsernameOrEmail = (req, res, next) => {
  console.log('/n/n check Duplicate Email=',
    req.body.email)
  User.findOne( {
    email: req.body.email
  })
  .exec()
  .then(user => {
    console.log('  \n\n\n  --- CHECK USER- EMAIL'); console.log(user)
    if (user) {
      res.status(400).send({
        message: "Failed!- Username is already in use!"
      });
      return;
    }
    next();
  })
  .catch(e => {
    console.err('    ОЩИБКА =', e)
    res.status(500).send({
      message: err
    });
  })
};




checkRolesExisted = (req, res, next) => {
  console.log('\n\n checkRolesExisted=')
  console.log('req.body.roles=')
  console.log(req.body.roles)

  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};


const checkForDuplicates = {
  checkDuplicateEmailOrTelefon,
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = checkForDuplicates;