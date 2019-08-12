import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar"
import Signin from "./components/Signin/Signin"
import Signup from "./components/Signup"
import News_Feeds from "./components/News-Feeds/News-feeds"
import Students from "./components/Students's Data/main"
import Feedback from "./components/Feedback/main"
import {Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Route exact  path="/" component={Signin}/>
      <Route  path="/News_Feeds" component={News_Feeds}/>
      <Route path="/Students" component ={Students} />
      <Route  path="/Feedback" component={Feedback}/>
      <Route path="/Register" component={Signup}/>


      {/* <Signin/> */}
    </div>
  );
}

export default App;
