import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import MainScreen from "./Pages/mainscreen";
import SecondScreen from "./Pages/secondScreen";
import Survey from "./Pages/Survey";

import root from "./styles/Style.css";

function delteElement(x){
  x.remove();
}
function createElement(x){
  document.getElementById("Main").createElement(x);
}
const App = () => {
 return (
  
   <div style={{maxWidth: "100%"}} id={"Main"}>
    <Navbar/>
    <Survey/>
    {/* <Survey/> */}
  {/* <SecondScreen /> */}
    {/* <Navbar/>mes
    <MainScreen/>
    <SecondScreen/>


     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes> */}
     
   </div>
 );
};
 
export default App;