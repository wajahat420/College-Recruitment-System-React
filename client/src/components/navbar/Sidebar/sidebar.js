import React from 'react'
import "./sidebar.css"
import {NavLink} from "react-router-dom"

export default function sidebar(props) {

	let sidebarClass = "sidebar-div"
	if(props.show){
		console.log("inside if")
		sidebarClass = "sidebar-div open"
	}
	// else{
	// 	console.log("inside else")
	// 	sidebarClass = "sidebar-div close"
	// }

	return (
		<div className={ sidebarClass + " col-5"}>
			
			<ul className="nav">        
				<li><NavLink  to="/News_Feeds"  activeClassName="active-class">News Feeds</NavLink></li>
				<li><NavLink to="/Students" activeClassName="active-class">Student's Data</NavLink>  </li>
				<li> <NavLink to="/Feedback" activeClassName="active-class">Universities Feedbacks</NavLink> </li>
				<li><NavLink exact to="/"  activeClassName="active-class">Login</NavLink></li>
			</ul>
		</div>
	)
}
