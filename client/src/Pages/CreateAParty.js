

//css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/Style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";


export default function CreateAPartyscreen() {
    var choosenSport = "basketball";
    const [form, setForm] = useState({
        PartyName: "",
        Location: "",
        DateRange: "",
        Sport: ""
      });
      const navigate = useNavigate();

    function updateForm(value) {
    return setForm((prev) => {
        return { ...prev, ...value };
    });
    }

    async function onSubmit(e) {
        e.preventDefault();
      
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };

        await fetch("http://localhost:5000/partiesRecord/add", {

          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPerson),
        })
        
        .catch(error => {
          window.alert(error);
          return;
        });
      
        setForm({ PartyName: "", Location: "", DateRange: "", Sport: "" });
        navigate("/");
      }

    return (
        <div id="leftOpenMenu">
        <form onSubmit={onSubmit}>
            <div style={{flexDirection: "row", Display: 'flex'}}>
              {/* <div style={{backgroundColor: "white", width: "10px", height: "50px"}}></div> */}
              <p>Party Name</p>
            </div>
            <input 
                type="text"   
                className="inputing"
                id="PartyName"
                placeholder="Name Field"
                value={form.PartyName}
                onChange={(e) => updateForm({ PartyName: e.target.value })}
                ></input>

            <p>Select Location</p>
            <input 
                className="inputing"
                placeholder="Location Field"
                type="text"   
                id="Location"
                value={form.Location}
                onChange={(e) => updateForm({ Location: e.target.value })}
                ></input>

            <p>Date Range</p>
            <input 
                className="inputing"
                type="text"   
                placeholder="Date Field"
                id="DateRange"
                value={form.DateRange}
                onChange={(e) => updateForm({ DateRange: e.target.value })}
                ></input>
    <div id="chooseSport">
                
         <input
            type="submit"
            value="Basketball"
            style={{marginTop: "2vh", marginLeft: "2vw"}}
            className="SubButton orange"
            onClick={(e) => updateForm({Sport: "BasketBall"})}

            id = "SubmitButton"
         />

          {/* <img src="../Resources"/> */}
          <input
              type="submit"
              value="Football"

              style={{marginTop: "2vh", marginLeft: "2vw"}}
              onClick={(e) => updateForm({Sport: "Football"})}
              className="SubButton orange"
              id = "SubmitButton"
          ></input>

            <input
            type="submit"
            value="VollyBall"
            onClick={(e) => updateForm({Sport: "VollyBall"})}

            style={{marginTop: "2vh", marginLeft: "2vw"}}
            className="SubButton orange"
            id = "SubmitButton"
         />
    </div>
<input
            type="submit"
            style={{marginTop: "2vh", marginLeft: "2vw"}}
            className="SubButton white"
            id = "SubmitButton"
         ></input>
        </form>

        {/* <div>
            <input type="image" onClick={(e) => updateForm({ Sport: "Basketball" })} src={require("../Resources/Images/2ndscreen-basketball-logo.png")} />
            <input type="image" onClick={(e) => updateForm({ Sport: "Football" })} src={require("../Resources/Images/2ndScreen-football-logo.png")} />
            <input type="image" onClick={(e) => updateForm({ Sport: "The other thing" })} src={require("../Resources/Images/2ndScreen-vollyball-logo.png")} />

              </div> */}
        <img/>
        </div>
    );
}
