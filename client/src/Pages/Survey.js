

//css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/Style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";


export default function Survey() {
    
    return (
        <div>
        
    <h1>Creating your profile!</h1>
  
  <form id="form">

      <div class="form-control">
          <label for="name" id="label-name">
              Full name
          </label>

          <input type="text"
                 id="name"
                 placeholder="Enter your name" />
      </div>

      <div class="form-control">
          <label for="email" id="label-email">
              Email
          </label>

          <input type="email"
                 id="email"
                 placeholder="Enter your email" />
      </div>

      <div class="form-control">
          <label for="age" id="label-age">
              Phone Number
          </label>


          <input type="text"
                 id="age"
                 placeholder="Enter your age" />
      </div>
<div class="form-control">
          <label for="role" id="label-role">
              Location
          </label>
           
          <select name="role" id="role">
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

           <input type="range" value="16" min="16" max="30" oninput="this.nextElementSibling.value = this.value"/>
<output>16</output>
      <div class="form-control">
          <label for="role" id="label-role">
              Gender
          </label>
           

          <select name="role" id="role">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              
          </select>
      </div>
{
    //   <div class="form-control">
    //       <label>
    //         Do you prefer to play with people of your own gender?
    //       </label>

    //       <label for="recommed-1">
    //           <input type="radio"
    //                  id="recommed-1"
    //                  name="recommed">Yes</input>
    //       </label>
    //       <label for="recommed-2">
    //           <input type="radio"
    //                  id="recommed-2"
    //                  name="recommed">No</input>
    //       </label>
    //   </div>
}

      {/* <div class="form-control">
          <label>  <a href="https://www.google.com" target="_blank"> Terms and Conditions</a> 
              <small>Required</small>
          </label>
          <label for="inp-1">
              <input type="checkbox"
                     name="inp">I have read and agree to the terms and conditions</input></label>
        
      </div> */}
          <button type="submit" value="submit">
          Submit
      </button>
</div></form>
        </div>
    );
}
