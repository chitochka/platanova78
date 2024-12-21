const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema( {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    apartNum: Number,
    telefon: String,
    vlastnik: Boolean,
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }],
    spotreba: {
      cez: {
        VT: [],
        NT:[]
      },
      voda:[]
    }
  })
);

module.exports = User;

/*  example  */
/*

{
    "email" : "mail@mm.mm",
    "password": "11111",
    "firstName" : "fName",
    "lastName" : "lastName",
    "apartNum" : "13",
    "telefon": "776325401",
    "vlastnik": "true",
}

*/
/*


module.exports = mongoose => {
    var schema = new mongoose.Schema(
      {
        email : String,
        password: String,
        firstName : String,
        lastName : String,
        apartNum : Number,
        telefon: String,
        vlastnik: Boolean,
        roles: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
          }
        ]
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const User = mongoose.model("user", schema);
    return User;
  };
*/


