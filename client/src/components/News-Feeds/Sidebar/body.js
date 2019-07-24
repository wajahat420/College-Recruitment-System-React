import React from "react"
// import "../css/body.css"

class Body extends React.Component{

    state = {
        text : ""
    }



    render(){
        // console.log("text",this.state.text)
        return(
            <div className="body">
                <div className="messages">
                    {
                        this.props.messages.map(elem=>{
                            const {signin} = this.props
                            if(signin === elem.sender){
                                return(
                                        <p className="send">
                                            <p>{elem.msg}</p>
                                        </p>
                                )
                            }else if( signin === elem.receiver ){
                                return(
                                    <p className="receive">
                                        <p>{elem.msg}</p>
                                    </p>
                                )
                            }
                        })
                    }
                    
                </div>
                <div className="inputs">
                    <input onChange={(event) => this.setState({text: event.target.value})}
                         type="text" placeholder="Write Message"/>
                    <input onClick={() => this.props.sendMsg(this.state.text)}
                         type="button" value="Send"/>
                </div>
            </div>
        )
    }
}
export default Body