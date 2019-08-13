import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"
import Toggle_Button from "./toggle_button/toggle_button"
import {connect} from "react-redux"
import Sidebar from "./Sidebar/sidebar"
import Backdrop from "./Backdrop/backdrop"

class navbar extends React.Component {
    state = {
        showSidebar : false
    }

    render(){
        // console.log("showSidebar",this.state.showSidebar)
        
        let backdrop 
        if(this.state.showSidebar){
        
            backdrop =  <Backdrop  click={()=> this.setState({showSidebar : false})}/>
        }

            return (
                <div>

                    <nav
                    style={{minWidth : "400px"}} 
                    className={(this.props.signin === "" ? "d-none":"")+" navbar    navbar-default"}>
                        <div className="container-fluid">
                            <Toggle_Button click={()=> this.setState({showSidebar : !this.state.showSidebar})}/>

                            <div className="navbar-header">
                                <NavLink exact to="/" className="navbar-brand ">Recruitment System</NavLink>
                            </div>
                            <div className="links">
                                <ul className="nav">        
                                    <li><NavLink  to="/News_Feeds"  activeClassName="active-class">News Feeds</NavLink></li>
                                    <li><NavLink to="/Students" activeClassName="active-class">Student's Data</NavLink>  </li>
                                    <li className={(this.props.signin.as === "university" ? "":"d-none")}> <NavLink to="/Feedback" activeClassName="active-class">Universities Feedbacks</NavLink> </li>
                                    <li><NavLink exact to="/"  activeClassName="active-class">Login</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Sidebar show={this.state.showSidebar}/>                    
                    {backdrop}
                </div>
            )
    }
}

const mapState = (state) =>{
    return{
        signin :  state.signin
    }
}

export default connect(mapState)(navbar)