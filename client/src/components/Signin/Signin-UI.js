import React from 'react'
import "../../css/Signin.css"
import {NavLink} from "react-router-dom"

function Signin(props)
     {
        return (
            <div className="main-img">
                <div className="dott">
                    <div className="header-main">
                        <h2>Login Now</h2>
                        <div className="header-bottom">
                            <div className="header-right w3agile">
                                <div className="header-left-bottom agileinfo">
                                    <form >
                                        <div className="icon1">
                                            <input onChange={props.change}
                                                type="email" placeholder="Email@example.com"
                                                required={true} name="email"/>
                                        </div>
                                        <div className="icon1">
                                            <input onChange={props.change} 
                                                type="password" placeholder="Password"
                                                required={true} name="password"/>
                                        </div>
                                        <div className="bottom">
                                            <input onChange={props.onSubmit}
                                                 type="submit" value="Log in" />
                                        </div>
                                        <p><span >Forgot Password?   <NavLink to="/Register">Register</NavLink> </span></p>
                                    </form>	
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                </div>
	       
        )
    }
export default Signin

