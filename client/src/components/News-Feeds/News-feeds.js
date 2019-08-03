import React, { Component } from 'react'
import InputPosts from  "./Posts/InputPost"
import AllPosts from  "./Posts/AllPosts"
import SideBar from "./Sidebar/sideBar"
import MsgBoxTitle from "./Msg/MsgBoxTitle"
// import 

import "../../css/sidebar.css"

export default class News_feeds extends Component {
    render() {
        return (
            <div className="min-width">
                <InputPosts />
                <AllPosts/>
                <MsgBoxTitle/>
                <SideBar/>

            </div>

        )
    }
}
