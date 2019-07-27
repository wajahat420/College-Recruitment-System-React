import React, { Component } from 'react'
import {connect} from "react-redux";

class ChatMsgs extends Component {
    filterMsgs = (obj) =>{
        console.log("msgsObject",obj)
    }
    render() {
        return (
            <div className="col-md-12 p-0">
                {this.props.messages.filter((obj)=> filterMsgs(obj)).map(elem => {
                    if(elem.sender){
                        <div className="col-md-8 float-right"></div>
                    }
                    else{
                        <div className="col-md-8 float-left"></div>
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = () => {
    return{

    }
}
const mapDispatchToProps = () =>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChatMsgs);
