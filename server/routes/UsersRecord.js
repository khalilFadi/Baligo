const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/usersRecord").get(function (req, res) {
 let db_connect = dbo.getDb3("Users");
 db_connect
   .collection("publicInformation")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/usersRecord/:id").get(function (req, res) {
  let db_connect = dbo.getDb3();
  let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("publicInformation")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
recordRoutes.route("/usersRecord/add").post(function (req, response) {
  let db_connect = dbo.getDb3();
 let myobj = {
   Name: req.body.Name,
   Email: req.body.Email,
   PhoneNumber: req.body.PhoneNumber,
   Location: req.body.Location,  
   Age: req.body.Age,  
   Gender: req.body.Gender,  
 };
 db_connect.collection("publicInformation").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/usersRecord/:id").post(function (req, response) {
  let db_connect = dbo.getDb3();
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
    PartyName: req.body.PartyName,
    Location: req.body.Location,
    DateRange: req.body.DateRange,  
    Sport: req.body.Sport,  

   }, 
  }
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {


  let db_connect = dbo.getDb3();
  let myquery = { _id:ObjectId( req.params.id )};

  db_connect.collection("publicInformation").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
      });
});
 
module.exports = recordRoutes;