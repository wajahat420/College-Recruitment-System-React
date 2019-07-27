import React, { Component } from 'react'
import {connect} from "react-redux";
// import { stat } from 'fs';
import "../../../css/chatMsgs.css"

class ChatMsgs extends Component {
    filterMsgs = (messages) =>{
        const {signin,receiver} = this.props
        // console.log("message.signin",messages.sender,"message.receiver",messages.receiver)
        if((signin === messages.sender || signin === messages.receiver) && (receiver === messages.sender || receiver === messages.receiver)){
            return true
        }
        else{
            return false
        }
        // console.log("filterFunc Obj",obj)
    }
    render() {
        // console.log("chatMsgs WORKING")
        return (
            <div className="col-md-12 p-0">
                {this.props.messages.filter((obj)=> this.filterMsgs(obj)).map((elem,index) => {
                    // console.log("map loop working")
                    if(elem.sender === this.props.signin){
                        // console.log("inside if")
                        return <div   key={index} className="col-md-8 sendMsg p-0 text-left float-right">
                                    <p className="float-right mb-1 pl-1 pr-1 p-2">{elem.msg}</p>
                                </div>
                    }
                    else{
                        // console.log("inside else")
                        return <div 
                                    key={index} 
                                    className="col-md-8 receiveMsg p-0 text-left float-left">
                                    <p className="mb-1 pl-1 pr-1 p-2">{elem.msg}</p>
                                </div>
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        receiver : state.receiver,
        signin : state.signin,
        messages : state.messages
    }
}
const mapDispatchToProps = () =>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChatMsgs);
