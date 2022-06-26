import React from "react";

//This the page that shows up when the website opens up
import "bootstrap/dist/css/bootstrap.css";
import "../styles/mainscreenstyle.css";
import "../styles/Style.css";
import backgroundImage from '../Resources/Images/draft1\ Balligo\ homepage.jpg';
var x = 0;
var txt = "Some really inspiration vision statement \n that should take all this space."; 
var speed = 60;
var finished = false;

//This function purpose is increase the size of letters (in a specific title) 
// when the letter is hovered
function typeWriter() {
    if (x < txt.length) {
      document.getElementById("VisionStatement").innerHTML += txt.charAt(x);
      x++;
      setTimeout(typeWriter, speed);
    }
    if(x == txt.length){
        finished = true;
        x += 10;
    }
    if(finished){
        finished = false;

    return showHideDot();
    }
}
//This function needs some repairs but it's purpose is to show and hide a button to 
//add movement to the screen
function showHideDot(){
    txt = document.getElementById("VisionStatement").innerHTML;


    setTimeout(function(){
        txt = document.getElementById("VisionStatement").innerHTML;
        txt = txt.slice(0, -1);
        document.getElementById("VisionStatement").innerHTML = txt;
    }, 1000);
    setTimeout(function(){
        
        document.getElementById("VisionStatement").innerHTML += '.';
        return showHideDot();
    }, 1000);

}

//This functions goal is to rotate the ball when the user moves up and doown (navigation)
//add a timer and a hide show function here to fix the problem
function rotate(direction = 90) {
    for(var i=1;i<11;i++)
    {
        document.getElementById('MainPageDivImage').style.WebkitTransitionDuration='1s';
                document.getElementById('MainPageDivImage').style.webkitTransform = 'rotate(' + direction + 'deg)';
    }
    return;
}



export default function Mainscreen() {
    //this calls the typeWriter which calls the show hide button function
    document.addEventListener('DOMContentLoaded', function() {
        typeWriter()
     }, false);

    //checks if the window is being scrolled up an down
     window.onscroll = function(e) {
         var angle = (window.scrollY / 600) * 100;

         rotate(angle);
      }

      //boring html shit
    return (
        <div id="MainPageDiv" >
            <pre id="VisionStatement"></pre>
            <a id="MainScreenButton">Find Party</a>
            <img id="MainPageDivImage" alt="timer" class="center" src={require('../../src/Resources/Images/ballstuckV4.png')} />
        </div>

    );
}