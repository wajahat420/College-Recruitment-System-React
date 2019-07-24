import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"

 function navbar() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink exact to="/" className="navbar-brand ">Recruitment System</NavLink>
                </div>
                <div>
                    <ul className="nav">        
                        <li><NavLink to="/" exact activeClassName="active-class">News Feeds</NavLink></li>
                        <li><NavLink to="/Students" activeClassName="active-class">Student's Data</NavLink>  </li>
                        <li> <NavLink to="/Universities" activeClassName="active-class">Universities Feedbacks</NavLink> </li>
                        <li><NavLink to="/Login" activeClassName="active-class">Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar