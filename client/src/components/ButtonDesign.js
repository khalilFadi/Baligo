import React from "react";

//This the page that shows up when the website opens up
import "bootstrap/dist/css/bootstrap.css";
import "../styles/mainscreenstyle.css";
import "../styles/Style.css";



export default function Button(name) {
    console.log(name);
    return (
        <div id="MainPageDiv" >
            <button class="SubButton white" style={{marginTop: "30vh"}}>
                {name}</button>

        </div>

    );
}