import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 

const Record = (props) => (
  <tr>
    <td>{props.record.partyOwner}</td>
    <td>{props.record.Location}</td>
    <td>{props.record.Image}</td>
    <td>{props.record.Sport}</td>
    {/* <td>{props.partiesRecord.Sport}</td> */}
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
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
       <thead>
         <tr style={{textAlign: 'left', marginLeft: '1vw'}}>
           <th>Party Name</th>
           <th>Location</th>
           <th>Date Range</th>
           <th>Sport</th>
         </tr>
         <button onClick={() => deleteRecord()}/>
       </thead>
       <tbody style={{textAlign: 'left'}}>
         {recordList()}
       </tbody>

     </table>
   </div>
 );
}