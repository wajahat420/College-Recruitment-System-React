import React, { Component } from 'react'
import Feedback from "./FeedbacksUI"
import axios from "axios"
import {connect} from "react-redux"

class allFeedbacks extends Component {
	constructor(){
		super()
		axios.get("/getAllFeedbacks")
		.then(res=>this.setState({allFeedbacks : res.data}))
		.catch((err)=>alert("Error "+err))
	}
	state = {
		allFeedbacks : []
	}

	filter = (elem) => {
		const {clicked,signin} = this.props
		// console.log("clicked",clicked/)
		if(clicked === "all"){
			return true
		}else{
			// console.log("signin email",signin.email)
			// console.log("elem.email",elem.email)
			return signin.email === elem.email
		}


	}
	render() {
		return (
			<div className="col-md-12 row  m-0">
					{
						this.state.allFeedbacks.filter((elem)=>this.filter(elem)).map((elem,index)=>{
							
							var email = elem.email.slice(0,elem.email.indexOf("@"))

							
							if(elem.webExperience <= 3){
								elem.webExperience = "Bad"	
							}else if(elem.webExperience <=7){
								elem.webExperience = "Good"
							}else{
								elem.webExperience = "Excellent"
							}

							
							if(elem.fulfillingCriteria <= 3){
								elem.fulfillingCriteria = "Bad"	
							}else if(elem.fulfillingCriteria <=7){
								elem.fulfillingCriteria = "Good"
							}else{
								elem.fulfillingCriteria = "Excellent"
							}
							return(
								<div key={index} className="col-md-4 ">
									<Feedback
										email={email}
										criteria={elem.fulfillingCriteria}
										req={elem.requirementFulfill}
										searched={elem.searchingFor}
										web={elem.webExperience}
										comments = {elem.comments}
										/>
								</div>
							)
						})
					}

			</div>
			
		)
	}
}
const mapStateToProps = (state) => {
	return{
		signin : state.signin
	}
}
export default connect(mapStateToProps)(allFeedbacks)