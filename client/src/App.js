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
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

import root from "./styles/Style.css";
import Mainscreen from "./Pages/mainscreen";

const App = () => {
 return (
  
   <div style={{maxWidth: "100%"}} id={"Main"}>
     {/* {CheckyCheck()} */}

    {/* <Survey/> */}
  {/* <SecondScreen /> */}
    {/* <Navbar/>mes
    <MainScreen/>
    <SecondScreen/>

 */}
 <Navbar/>
 <Routes>
	<Route exact path="/" element={<Mainscreen/>}></Route>
	<Route exact path="/Signup" element={<LoginPage/>}></Route>
	<Route exact path="/HomePage" element={<HomePage/>}></Route>
 </Routes>
     
   </div>
 );
};
 
export default App;