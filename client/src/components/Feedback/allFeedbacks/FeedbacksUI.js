import React from 'react'

export default function allFeedbacks(props) {
		return (
				<div className="col-md-12 p-0 m-2 ">
					<h4 className="col-md-12 text-center p-0">
						{props.email}
					</h4>
					<div className="row  m-0 p-2 border">
	
						<div className="col-5 text-left p-0">
							<p>Web Experience</p>
							<p>Requirement Fulfilled</p>
							<p>Criteria Fulfilled</p>
							<p>Searched For</p>
						</div>
						<div className="col-3 p-0 text-center">
							<p className="col-12 m-0 p-0"><i style={{fontSize:"2.3em",width:"100%"}} className="fa  fa-long-arrow-right"></i></p>
							<p className="col-12 m-0 p-0"><i style={{fontSize:"2.3em",width:"100%"}} className="fa  fa-long-arrow-right"></i></p>
							<p className="col-12 m-0 p-0"><i style={{fontSize:"2.3em",width:"100%"}} className="fa  fa-long-arrow-right"></i></p>
							<p className="col-12 m-0 p-0"><i style={{fontSize:"2.3em",width:"100%"}} className="fa  fa-long-arrow-right"></i></p>
						</div>
						<div className="col-4 text-right p-0">
							<p>{props.web}</p>
							<p>{props.req}</p>
							<p>{props.criteria}</p>
							<p>{props.searched}</p>
						</div>
						<div className="col-10 m-auto">
							{props.comments}
						</div>
					</div>
				</div>
		)
}
