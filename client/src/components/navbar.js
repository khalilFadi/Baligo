import React from "react";
 
// We import bootstrap to make our application look better.

import "bootstrap/dist/css/bootstrap.css";
import "../../src/styles/Style.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
  <nav id="" class="navbar navbar-expand-lg navbar-light " >
  <div class="container-fluid" id="navigationMenu" >
  <NavLink id="BalligoTextLogo" to="/">
    <a id="BalligoTextLogo" href="#">Balligo</a>
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li id="navItem" >
          <a  href="#">Home</a>
        </li>
        <li id="navItem">
          <a  href="#">Features</a>
        </li>
        <li id="navItem">
        <NavLink className="nav-link" to="/create">
                Create Record
              </NavLink>
        </li>
        <li id="navItem">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>

      
      
        <button class="loginButton"><span> Login </span>        
        </button>

    </div>
    
  </div>
</nav>
  //  <div>
  //    <nav id="navigationMenu" className="navbar navbar-expand-lg navbar-light bg-light">
  //      <NavLink className="navbar-brand" to="/">
  //        <h1 style={{"width" : 25 + '%'}}>Balligo</h1>
  //      {/* <img style={{"width" : 25 + '%'}} src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img> */}
  //      </NavLink>
  //      <button
  //        className="navbar-toggler"
  //        type="button"
  //        data-toggle="collapse"
  //        data-target="#navbarSupportedContent"
  //        aria-controls="navbarSupportedContent"
  //        aria-expanded="false"
  //        aria-label="Toggle navigation"
  //      >
  //        <span className="navbar-toggler-icon"></span>
  //      </button>
 
  //      <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //        <ul className="navbar-nav ml-auto">
  //          <li className="nav-item">
  //            <NavLink className="nav-link" to="/create">
  //              Create Record
  //            </NavLink>
  //          </li>
  //        </ul>
  //      </div>
  //    </nav>
  //  </div>
 );
}