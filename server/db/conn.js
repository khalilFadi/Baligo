const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
// @_db => employees
// @_db2 => Parties
// @_db3 => Users
var _db, _db2, _db3;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        _db2 = db.db("Parties");
        _db3 = db.db("Users");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
        });
  },
 
  getDb: function () {
    return _db;
  },
  getDb2: function () {
    return _db2;
  },
  getDb3: function () {
    return _db3;
  },
};