

//css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/Style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/SurveyStyle.css";

export default function Survey() {

    const [form, setForm] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        Location: "",
        Age: 16,
        //* True: male, False -> Female
        Gender: true,
    })
    const navigate = useNavigate();

    function updateForm(value){
        return setForm((prev) => {
            return { ...prev, ...value};
        })
    }
    async function onSubmit(e){
        e.preventDefault();

        const newUser = {...form};
        await fetch("http://localhost:5000/usersRecord/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        .catch(error => {
            window.alert(error);
            return;
        })
        setForm({Name: "", Email: "", PhoneNumber: "", Location: "", Age: 16, Gender: true});
        navigate("/");
            


    }
    function MaleFemale(x){
        if(x =="Male"){
            return true
        }else{
            return false
        }
    }
    return (
        <div id="SurveySheet">
          
  <form id="form" onSubmit={onSubmit}>
  <h1 id="SurveyTitle">Creating your profile!</h1>

      <div class="form-control">
          <label for="name" id="label-name" >
              Full name
          </label>
          <input type="text"
                 id="name"
                 placeholder="Enter your name" 
                 onChange={(e) => updateForm({Name: e.target.value})}/>
      </div>

      <div class="form-control">
          <label for="email" id="label-email">
              Email
          </label>

          <input type="email"
                 id="email"
                 onChange={(e) => updateForm({ Email: e.target.value })}
                 placeholder="Enter your email" />
      </div>

      <div class="form-control">
          <label for="age" id="label-age">
              Phone Number
          </label>


          <input type="text"
                 id="age"
                 onChange={(e) => updateForm({ PhoneNumber: e.target.value })}
                 placeholder="Enter your age" />
      </div>
<div class="form-control">
          <label for="role" id="label-role">
              Location
          </label>
           
          <select name="role" id="role" onChange={(e) => updateForm({Location: e.target.value})}>
              <option value="Ramallah">Ramallah</option>
              <option value="Bethlehem">Bethlehem</option>
             <option value="Jericho">Jericho</option> 
            <option value="Jerusalem">Jerusalem</option>
            <option value="Hebron">Hebron</option>
          </select>
      </div>
    
    <div class="form-control">
          <label> Age
          </label>

           <input onChange={(e) => updateForm({Age: updateForm.target.value})} type="range" value="16" min="16" max="30" oninput="this.nextElementSibling.value = this.value"/>
<output>16</output>
</div>
      <div class="form-control">
          <label for="role" id="label-role">
              Gender
          </label>
           

          <select name="role" id="role" onChange={(e) => updateForm({Gender: MaleFemale(e.target.value)})}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              
          </select>
      </div>

      <div class="form-control" style={{height: "80px"}}>
          <label>
            Do you prefer to play with people of your own gender?
          </label>
          <label for="recommed-2" id="ElementOfChoice">
              <input type="radio"
                     id="recommed-2"
                     name="recommed"/>
                     <p>Yes</p>
          </label> 
          <label for="recommed-2" id="ElementOfChoice" style={{marginLeft: "30vw"}}>
              <input type="radio"
                     id="recommed-2"
                     name="recommed"/>
                     <p>No</p>
          </label> 
      </div>


       <div id="TermsofCondition" class="form-control" >
       <label style={{marginTop: "1vh"}}><input type="checkbox"/></label>
          <label style={{marginLeft: "1vw"}}>  <a href="../Resources/Terms_and_conditions Balligo.pdf" target="_blank" style={{marginRight: "5px"}}> Terms and Conditions</a> 
              Required
          </label>
        
      </div> 
          <button  type="submit" value="submit" class={"white"} onClick={() => {window.open("/HomePage", '_self')}} onSubmit={onSubmit}>
          Submit
      </button>
</form></div>


    );
}
