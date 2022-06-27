

//css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/secondscreenstyle.css";
import "../styles/Style.css";
import CreateAPartyscreen from "./CreateAParty.js";
import JoinAPartyscreen from "./JoinAParty.js";

var leftSideOpen = false;
var rightSideOpen = false;

function OpenCreateAparty(){
    let leftSide = document.getElementById('leftSide');
    let leftSideClosed = document.getElementById('leftSideCloseMenu');
    let leftbutton = document.getElementById('LeftSubButton');
    let leftSideOpened = document.getElementById('leftOpenMenu');

    let transitionTime = '1s';
    
    //set Transition Times:
    leftSideClosed.style.transition = transitionTime;
    leftSideOpened.style.transition = transitionTime;
    leftSide.style.transition = transitionTime;
    leftbutton.style.transition = transitionTime;

    let rightSide = document.getElementById('rightSide');
    let rightSideClosed = document.getElementById('rightSideCloseMenu');
    let rightbutton = document.getElementById('rightSide').children.namedItem("RightSubButton");
    let rightSideOpened = document.getElementById('rightOpenMenu');
    const RightButton = document.getElementById("LeftSubButton");

    //Set right Transitions here:
    rightSideOpened.style.transition = transitionTime;
    rightSide.style.transition = transitionTime;
    rightSideClosed.style.transition = transitionTime;
    rightbutton.style.transition = transitionTime;

    if(leftSideOpen){
        //getting the button back to it's orginial position
        RightButton.style.top = "150vh";
        RightButton.style.right = "50vw";
    
        //change width to split left side and right side
        leftSide.style.width = '50vw';
        rightSide.style.width = '50vw';

        //show the button and hidden view
        leftSideOpened.style.pointerEvents = 'none';
        leftSideClosed.style.pointerEvents = 'all';
        leftSideClosed.style.opacity = 1;
        leftSideOpened.style.opacity = 0;

        rightSideClosed.style.opacity = 1;
        rightbutton.style.opacity = 1;
        rightSideOpened.style.opacity = 0;

        //change button text back to "start now"
        leftbutton.innerHTML = "Start Now";
        leftSideOpen = false;
        return;
    }
    //moving the button to the top right side 
    RightButton.style.position = 'absolute';
    RightButton.style.top = "100vh";
    RightButton.style.right = "10vw";
        
    //preparing the screen hiding everything and increasing width
    leftSide.style.width = '90vw';
    rightSide.style.width = '10vw';
    
    //hide right side and the unneeded from the left side

    leftSideOpened.style.pointerEvents = 'all';
    leftSideClosed.style.pointerEvents = 'none';
    leftSideClosed.style.opacity = 0;
    leftSideOpened.style.opacity = 1;
    rightSideClosed.style.opacity = 0;
    rightbutton.style.opacity = 0;

    leftbutton.innerHTML = "Get Back";   
    leftSideOpen = true;
}

function OpenJoinAparty(){
    let leftSide = document.getElementById('leftSide');
    let leftSideClosed = document.getElementById('leftSideCloseMenu');
    let leftbutton = document.getElementById('leftSide').children.namedItem("LeftSubButton");
    let leftSideOpened = document.getElementById('leftOpenMenu');

    let rightSide = document.getElementById('rightSide');
    let rightSideClosed = document.getElementById('rightSideCloseMenu');
    let rightSideOpened = document.getElementById('rightSide').children.namedItem("rightOpenMenu");
    let rightbutton = document.getElementById('rightSide').children.namedItem("RightSubButton");

    let transitionTime = '1s';

    rightSide.style.transition = transitionTime;
    leftSide.style.transition = transitionTime;
    rightSideClosed.style.transition = transitionTime;
    rightbutton.style.transition = transitionTime;

    if(rightSideOpen){
        let transitionTime = '1s';
        //change width to split left side and right side
        rightSide.style.width = '50vw';
        leftSide.style.width = '50vw';

        //show the button and hidden view
        rightSideOpened.style.pointerEvents = 'none';
        rightSideClosed.style.pointerEvents = 'all';
        rightSideClosed.style.opacity = 1;
        rightSideOpened.style.opacity = 0;

        leftSideClosed.style.opacity = 1;
        leftbutton.style.opacity = 1;
        leftSideOpened.style.opacity = 0;
        //change button text back t start now
        rightbutton.innerHTML = "Start Now";
        rightSideOpen = false;
        return;
    }
    //preparing the screen hiding everything and increasing width
    rightSide.style.width = '90vw';
    leftSide.style.width = '10vw';

    //hide right side and the unneeded from the left side
    rightSideOpened.style.pointerEvents = 'all';
    rightSideClosed.style.pointerEvents = 'none';
    rightSideClosed.style.opacity = 0;
    rightSideOpened.style.opacity = 1;
    leftSideClosed.style.opacity = 0;
    leftbutton.style.opacity = 0;


    rightbutton.innerHTML = "Get Back";   
    rightSideOpen = true;
}
function Writer(){
    //turn this on to increase the size of letters for MainText
    increaseSizeOfEachLetter('MainText');


    //To increase size of LeftSide
    const LeftButton = document.getElementById("LeftSubButton");
    LeftButton.onclick = function(){
        OpenCreateAparty()
    };


    const RightButton = document.getElementById("RightSubButton");
    RightButton.onclick = function(){

        OpenJoinAparty()
    };
}
function increaseSizeOfEachLetter(id){

    let letters = document.getElementById(id);

    let MainTextT = letters.innerHTML.toString();
    letters.innerHTML = "";
    var i = 0;

    while (i < MainTextT.length){
        var spanobject = document.createElement("SPAN");
        var t = document.createTextNode(MainTextT[i]);
        spanobject.setAttribute('id','Letters');
        spanobject.appendChild(t);
        document.getElementById(id).appendChild(spanobject);

        i++;
    }

//     for(var i = 0;i < letters.length; i++){
//         var dateSpan = document.createElement('SPAN');
//         dateSpan.innerHTML = letters.innerHTML[i];
//         letters.appendChild(dateSpan);

// }       


}



export default function SecondScreen() {
    window.onload = Writer;
    
    return (
        <div id="SecondPageDiv" >
            <div id="leftSide">
                

                <CreateAPartyscreen/>
                <div id="leftSideCloseMenu" >
                    <p id="SupText">Invite your team</p>
                    <h1 id="MainText"> Create a party</h1>
                    <h2 id="Subtext"> Create your own party and find people to play with</h2>
                </div>
                <button class="SubButton" id="LeftSubButton">Start Now</button>

            </div>
            <div id="rightSide">
                <div id="rightSideCloseMenu" >
                    <p id="SupText">Find your team</p> 
                    <h1 id="MainText"> Join a party</h1>
                    <h2 id="Subtext"> Find a party that matches your intrests</h2>
                </div>
                <JoinAPartyscreen/>
                <button class="SubButton" id="RightSubButton">Start Now</button>

            </div>

        </div>

    );
}