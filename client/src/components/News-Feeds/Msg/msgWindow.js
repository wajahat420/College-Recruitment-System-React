import React from 'react'
import "../../../css/msgWindow.css"
import ChatMsgs from "./chatMsgs"

export default function msgWindow(props) {
    return (
        <div onClick={props.click} onMouseLeave={props.mouseLeave}  className="col-md-12 msgWindow  p-0">
            <header onClick={props.closeChat}  className="col-md-12 mb-0 p-2 h6 text-center" >{props.header}</header>
            <div className="col-md-12 p-0 ">
                <ChatMsgs/>
            </div>
            <footer className="row ml-0 col-md-12 p-0">
                <input className="col-md-10 p-0" type="text"/>
                {/* <div className=""> */}
                <i className= " col-md-2 p-2 fa fa-arrow-right"></i>
                {/* </div> */}
            </footer>
        </div>
    )
}
