import React, { Component } from 'react'

export default class feedback_navbar extends Component {

	render() {
		return (
			<div className="col-md-12 text-center h3 feedback-navbar p-0">
				<div className="row m-0 p-0">
					<div 
						className={(this.props.checkClicked === "all"?"bgblue":"") + " col-md-6 p-2 border"}
						onClick={()=>this.props.setClicked("all")}
						>
						All Feedbacks
					</div>
					<div 
						className={(this.props.checkClicked === "your"?"bgblue":"") + " col-md-6 p-2 border"}
						onClick={()=>this.props.setClicked("your")}
						>
						Your Feedback
					</div>
				</div>
			</div>
		)
	}
}

