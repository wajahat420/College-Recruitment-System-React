import React from 'react'
import "../../css/Signin.css"
import {NavLink} from "react-router-dom"

function Signin(props)
     {
        return (
			<div className="signin">
				<div className="main-img">
					<div className="dott text-center ">
						<div className="col-md-4 m-auto   dataInSignin">
							<h2 className="">Login Now</h2>

							<div className="">
								<input onChange={props.change}
									style={{width:"100%"}}
									type="email" placeholder="Email@example.com"
									required={true} name="email"/>
							</div>
							<div className="">
								<input onChange={props.change} 
									style={{width:"100%"}}
									type="password" placeholder="Password"
									required={true} name="password"/>
							</div>
							<div className="bottom">
								<input onClick={ props.Submit}
									style={{width:"100%"}}
									type="button" value="Log in" />
							</div>
							<p><span >Forgot Password?   <NavLink to="/Register">Register</NavLink> </span></p>
						</div>
					</div>
				</div>
			</div>
        )
    }
export default Signin

