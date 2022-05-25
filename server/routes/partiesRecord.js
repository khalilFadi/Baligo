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
recordRoutes.route("/partiesRecord").get(function (req, res) {
 let db_connect = dbo.getDb2("Parties");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/partiesRecord/:id").get(function (req, res) {
 let db_connect = dbo.getDb2();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("records")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
// This section will help you create a new record.
recordRoutes.route("/partiesRecord/add").post(function (req, response) {
 let db_connect = dbo.getDb2();
 let myobj = {
   PartyName: req.body.PartyName,
   Location: req.body.Location,
   DateRange: req.body.DateRange,
   Sport: req.body.Sport,  

 };
 db_connect.collection("records").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/partiesRecord/:id").post(function (req, response) {
 let db_connect = dbo.getDb2(); 
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
recordRoutes.route("/id").delete((req, response) => {

  console.log("Im here");
  let db_connect = dbo.getDb2();
  let myquery = { _id:ObjectId( req.params.id )};
  const _id = new ObjectID(req.body._id);
  db_connect.collection("records").deleteOne({_id:_id},function(err,question){
    if(err) throw err;
    console.log('the document is deleted')
    res.send(question);

});
});
 
module.exports = recordRoutes;