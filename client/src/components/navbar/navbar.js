import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

 class navbar extends React.Component {
    render(){

            return (
                <nav className={(this.props.signin === "" ? "d-none":"")+" navbar    navbar-default"}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <NavLink exact to="/" className="navbar-brand ">Recruitment System</NavLink>
                        </div>
                        <div>
                            <ul className="nav">        
                                <li><NavLink  to="/News_Feeds"  activeClassName="active-class">News Feeds</NavLink></li>
                                <li><NavLink to="/Students" activeClassName="active-class">Student's Data</NavLink>  </li>
                                <li> <NavLink to="/Universities" activeClassName="active-class">Universities Feedbacks</NavLink> </li>
                                <li><NavLink exact to="/"  activeClassName="active-class">Login</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
    }
}

const mapState = (state) =>{
    return{
        signin :  state.signin
    }
}

export default connect(mapState)(navbar)