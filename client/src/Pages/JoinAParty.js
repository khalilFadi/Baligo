import React, { useEffect, useState } from "react";
import { Link, renderMatches } from "react-router-dom";
 
function getColor(sportname){
  switch(sportname){
    case "Basketball":
      return "rgb(242, 101, 34)";
    case "Football":
      return "rgb(69, 69, 69)";
    case "VollyBall":
      return "rgb(242, 214, 34)";
  }
}
function getImage(sportname){
  switch(sportname){
    case "Basketball":
      return "basketballlogo";
    default:
      return "basketballlogo";

    case "Football":
      return "footballlogo";
    // case "VollyBall":
    //   return "rgb(242, 214, 34)";
  }
}
const Record = (props) => (
  <div class="card">
  <div class="additional" style={{background: getColor(props.record.Sport)}}>
    <div class="user-card">
      <div class="level center">
      {props.record.Sport}
      </div>
      <img class = "image" src={require('../Resources/Images/' + getImage(props.record.Sport) + '.png')}/>
    
      <svg width="110" height="110" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" class="center2">
        <title id="title">{props.record.Sport}</title>
        
        <defs>
          <clipPath id="scene">
            <circle cx="125" cy="125" r="115"/>
          </clipPath>
          <clipPath id="lips">
            <path d="M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z" />
          </clipPath>
        </defs>
        
      </svg>
    </div>
    <div class="more-info">
      
      <div class="coords">
       
        <span>-Secuirty guard name: Saif Amer</span>
      </div>
      <div class="coords">
        
        <span>-Security guard phone number: 0595195645</span>
      </div>
      <div class="coords">
        
        <span>-Host note: So excited for the game! bring your water bottles :)</span>
      </div>
      
      <div class="stats">
        <div class="title">Player info:</div>
        <div>
          <div class="title">Skills</div>
          <i class="fa fa-trophy"></i>
          <div class="value">9/10</div>
        </div>
        <div>
          <div class="title">previous parties</div>
          <i class="fa fa-gamepad"></i>
          <div class="value">7</div>
        </div>
        <div>
          <div class="title">Network</div>
          <i class="fa fa-group"></i>
          <div class="value">20</div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
  <div class="general">
    <h1> {props.record.Sport}</h1>
    <p>Location name: {props.record.Location} </p>
    <p>Court name:Ramallah Tarweehi Center </p>
      <p>Host: {props.record.partyOwner}</p>
      <p>Date: {props.record.DateRange}</p>
      <p>Time:4:00 pm</p>
      <p>Gender: {props.record.Genders}</p>
      
    
   
  </div>
 
 </div>

 
 
 
 );
export default function JoinAParty() {

  const [records, setRecords] = useState([]);
  
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/partiesRecord/`);
    console.log(await (await fetch("http://localhost:5000/UsersRecord/")).json());
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
   return;
 }, [records.length]);

 async function deleteRecord(id) {

  await fetch(`http://localhost:5000/${id}`,{
    method: "DELETE"
  });
  const newRecords = records.filter((el) => el._id !== id);
  setRecords(newRecords);
}
function recordList(){
  return records.map((record) => {
    return (
      <Record
        record={record}
        deleteRecord={() => deleteRecord(record._id)}
        key={record._id}
      />
    );
  });
}
 // This following section will display the table with the records of individuals.
 return (
   <div id="rightOpenMenu" style={{opacity: 0, pointerEvents: "none"}}>

     <table className="table table-striped" style={{ marginTop: 20 }}>
       
       <tbody style={{textAlign: 'left'}}>
         {recordList()}
       </tbody>

     </table>
   </div>
 );
}