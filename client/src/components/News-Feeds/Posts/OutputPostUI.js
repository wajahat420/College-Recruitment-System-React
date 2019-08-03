import React, { Component } from 'react'
// import img from  "../../../images/1.jpg"

export default class OutputPosts extends Component {
    render() {
        return (
            <div className="float-left clearfix col-md-9 m-0 pt-4 pb-4">
                <div className="col-md-7 m-auto p-0">
                    <h4 className="">{this.props.name}</h4>
                    <div className="pb-2" style={{fontWeight : "600",color:"blue"}}>{this.props.postText}</div>
                    <img className={(this.props.imageURL === "" ? "d-none":"")+" border"}
                        width="100%" height="270px"
                        src={this.props.imageURL} alt="not found">    
                    </img>
                    <div className="row  post-bottom text-center m-0 p-1">
                        <div  onClick={this.props.like} 
                            className={(this.props.getLikeFromDb ? "blue":"")+" col-md-4 p-1"}>
                                Like
                        </div>
                        <div className="col-md-4 p-1">Comment</div>
                        <div className="col-md-4 p-1">Share</div>
                    </div>
                </div>
            </div>
        )
    }
}
