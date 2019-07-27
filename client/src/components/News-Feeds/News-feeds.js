import React, { Component } from 'react'
import InputPosts from  "./Posts/InputPost"
import AllPosts from  "./Posts/AllPosts"
import SideBar from "./Sidebar/sideBar"
import MsgBoxTitle from "./Msg/MsgBoxTitle"
// import 

export default class News_feeds extends Component {
    render() {
        return (
            <div>
                <InputPosts />
                <AllPosts/>
                <MsgBoxTitle/>
                <SideBar 
                    // users={this.props.users}
                    // setSignin={(elem) => this.setState({signin : elem})}
                    // getSignin={this.state.signin}
                    // setReceiver={(elem) => this.setState({receiver : elem})}
                    // getReceiver = {this.state.receiver}
                    />
                {/* <Posts /> */}

            </div>

        )
    }
}
