import React, { Component } from 'react'
import "../../../css/msgBoxTitle.css"
import {connect} from "react-redux";
import MsgWindow from "./msgWindow" 

 class MsgBoxTitle extends Component {
    state = {
        arr : ["wajahat","hamza","aun","atif"],
        nameHover : "",
        titleClick : "",
        top : 335,
        mouseLeave : false,
        click : false
    }

    closeChat = (index,elem) => {
        // console.log("in close chat func",elem)
        this.props.removeNameFromMsgTitles(index)
        this.setState({nameHover : ""},()=>{
            this.setState({titleClick : ""})
        })
    }   

    titleClick = (elem) => {
        // console.log("in title click func titleClick",this.state.titleClick,"elem",elem)
        if(elem !== this.state.titleClick){
            // console.log("if")
            this.setState({titleClick : elem})
        }
        else{
            // console.log("else")
            this.setState({titleClick : ""})
        }   
    }
    
    render() {
        // console.log("titleClick",this.state.titleClick)

        return (
            <div  className=" col-md-9 msgBoxTitle position-fixed p-0 m-0">
                <div className="row col-md-12  text-center m-0 p-0">
                    {
                        this.props.msgBoxTitles.map((elem,index) => {
                            let showElem = <div 
                                                className={(this.state.titleClick === elem ? "d-none " : " ") + "title row mr-0 ml-0 col-md-12 element p-2 h6 p-0"}
                                                onClick={() => this.titleClick(elem)}
                                                onMouseOver={() => this.setState({nameHover : elem})}
                                                onMouseOut = {() => this.setState({nameHover : ""})}
                                            >
                                                <div 
                                                className=" col-md-12 p-0  ">
                                                    {elem} 
                                                </div>
                                                <div
                                                    className="position-absolute   col-md-12 p-0 ">
                                                    <div
                                                     className="col-md-1  mr-2 float-right cross"
                                                     onClick= {() =>this.closeChat(index,elem)}
                                                      >
                                                        <i 
                                                            className={(this.state.nameHover === elem) ? "fa fa-times" : ""}
                                                        >

                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                        
                            if(elem === this.state.titleClick){
                                // console.log("working",this.state.titleClick)
                                // this.setState({top})
                                showElem = <MsgWindow 
                                                closeChat = {()=>this.setState({titleClick : "",nameHover:""})}
                                                onClick = {this.state.mouseLeave === true && this.setState({titleClick : ""})}
                                                onMouseOver = {() => this.setState({mouseLeave : false})}
                                                onMouseLeave = {() => this.setState({mouseLeave : true})}
                                                header={elem}/>
                                // showElem = <p className="col-md-12   p-2 h6 p-0" >Clicked</p>
                            }
                            return(
                                <div className="col-md-3  p-0" key={index}>
                                    {showElem}
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
// className={(this.state.titleClick === elem ? " " : "d-none ") + "col-md-12 p-0" }
const mapStateToProps = (state) => {
    return {
        msgBoxTitles : state.msgBoxTitles
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openMsgWindow : (clickedElem)  => {
            dispatch({
                type : "OPEN_MSG_WINDOW",
                openMsgWindow : clickedElem
            }) 
        },
        removeNameFromMsgTitles : (elemRemove) =>{
            dispatch({
                type : "REMOVE_NAME_FROM_MSG_TITLES",
                elemIndex : elemRemove
            })
        }   
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MsgBoxTitle);

 