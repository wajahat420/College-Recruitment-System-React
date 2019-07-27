import React, { Component } from 'react'
// import img from  "../../../images/1.jpg"

export default class OutputPosts extends Component {
    render() {
        return (
            <div className="float-left clearfix col-md-9 m-0 pt-4 pb-4">
                <div className="col-md-7 m-auto p-0">
                    <h2 className="">Username</h2>
                    <div>{this.props.postText}</div>
                    <img className="border"
                        width="100%" height="270px"
                        src={this.props.imageURL} alt="not found"></img>
                    <div className="row  post-bottom text-center m-0 p-2">
                        <div className="col-md-4 p-2">Like</div>
                        <div className="col-md-4 p-2">Comment</div>
                        <div className="col-md-4 p-2">Share</div>
                    </div>
                </div>
            </div>
        )
    }
}
