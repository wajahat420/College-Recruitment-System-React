import React, { Component } from 'react'
import InputPosts from  "./Posts/InputPost"
import AllPosts from  "./Posts/AllPosts"
import Sidebar from "./Sidebar/main"
import MsgBoxTitle from "./Msg/MsgBoxTitle"

export default class News_feeds extends Component {
    render() {
        return (
            <div>
                <InputPosts />
                <AllPosts/>
                <Sidebar/>
                <MsgBoxTitle/>
                {/* <Posts /> */}

            </div>

        )
    }
}
