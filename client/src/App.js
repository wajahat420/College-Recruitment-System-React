import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar"
import Signin from "./components/Signin/Signin-UI"
import Signup from "./components/Signup"
import News_Feeds from "./components/News-Feeds/News-feeds"

import {Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Route path="/Students"/>
      <Route path="/Universities"/>
      <Route path="/Login" component={Signin}/>
      <Route path="/Register" component={Signup}/>
      <Route exact path="/" component={News_Feeds}/>


      {/* <Signin/> */}
    </div>
  );
}

export default App;
