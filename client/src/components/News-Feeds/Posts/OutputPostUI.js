import React, { Component } from 'react'
import { connect } from 'react-redux';
// import img from  "../../../images/1.jpg"

class OutputPosts extends Component {
    render() {
        let signinAs = this.props.signin.as
        return (
            <div className={(signinAs === "student"?"col-md-12":"col-9")+" float-left clearfix x m-0 pt-4 pb-4"}>
                <div className={(signinAs === "student" ? "col-md-6":"col-md-7")+" m-auto p-0"}>
                    <h4 className="">{this.props.name}</h4>
                    <div className="pb-2" style={{fontWeight : "600",color:"blue"}}>{this.props.postText}</div>
                    <img className={(this.props.imageURL === "" ? "d-none":"")+" border"}
                        width="100%" height="270px"
                        src={this.props.imageURL} alt="not found">    
                    </img>
                    <div className="row  post-bottom text-center m-0 p-1">
                        <div  onClick={this.props.like} 
                            className={(this.props.getLikeFromDb ? "blue":"")+" col-4 p-1"}>
                                Like
                        </div>
                        <div className="col-4 p-1">Comment</div>
                        <div className="col-4 p-1">Share</div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state) =>{
    return{
        signin : state.signin
    }
}
export default connect(mapState)(OutputPosts)
