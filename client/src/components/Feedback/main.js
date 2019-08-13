import React from 'react'
import InputFeedback from "./inputFeedback"
import Navbar from "./feedback-navbar"
import AllFeedback from "./allFeedbacks/allFeedbacks"

import "../../css/feedback.css"

export default class main extends React.Component {
	state = {
		clicked : "all",
		sendFeedback : false
	}
	render(){
		return (
			<div style={{minWidth : "350px"}} className="feedback-main">

				<Navbar
					checkClicked={this.state.clicked}
					setClicked={(value)=>this.setState({clicked : value,sendFeedback:false})}
					/>
				<p 
				onClick ={()=> this.setState({sendFeedback : true,clicked:""})}
				className="text-right link p-2">
					send feedback
				</p>
				<div className={(this.state.sendFeedback ?"":"d-none")}>
					<InputFeedback/>
				</div>
				<div className={this.state.clicked === ""?"d-none":""}>
					<AllFeedback
						clicked = {this.state.clicked}/>
				</div>
			</div>
		)
	}
}
