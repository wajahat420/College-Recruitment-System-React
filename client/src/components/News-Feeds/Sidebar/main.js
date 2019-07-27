import React from "react"
// import SideBar from "./sideBar"
import {connect} from "react-redux";

class Main extends React.Component{
    state={
        signin : "",
        receiver : "",
        messages: []
    }   

    sendMsg = (msg) => {
        // console.log("user",user)
        // console.log("msg",msg)
        const{signin,receiver} = this.state

        if(signin && receiver && signin !== receiver){
            let obj = {
                sender : this.state.signin,
                receiver : this.state.receiver,
                msg
            }   
            this.setState({messages : [...this.state.messages,obj]})
        }else{
            console.log("error")
        }

     
    }

    render(){
        
        // console.log("messages",this.state.messages)
        return(
            <div>
                <SideBar users={this.props.users}
                    setSignin={(elem) => this.setState({signin : elem})}
                    getSignin={this.state.signin}
                    setReceiver={(elem) => this.setState({receiver : elem})}
                    getReceiver = {this.state.receiver}
                />
                {/* <Body signin={this.state.signin}
                      messages={this.state.messages}
                      sendMsg={(text) => this.sendMsg(text)}
                      /> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users : state.users
    }
};
export default connect(mapStateToProps)(Main);
