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
    
    render() {


        return (
            <div  className=" col-md-9 msgBoxTitle position-absolute p-0 m-0">
                <div className="row col-md-12  text-center m-0 p-0">
                    {
                        this.props.msgBoxTitles.map((elem,index) => {
                            let showElem = <div 
                                                className={(this.state.titleClick === elem ? "d-none " : " ") + "title row ml-0 col-md-12 element p-2 h6 p-0"}
                                                onClick={() => this.setState({titleClick : elem})}
                                                onMouseOver={() => this.setState({nameHover : elem})}
                                                onMouseOut = {() => this.setState({nameHover : ""})}
                                            >
                                                <div 
                                                className=" col-md-10 p-0 text-center float-left">
                                                    {elem} 
                                                </div>
                                                <div 
                                                onClick= {() => this.props.removeNameFromMsgTitles(index)}
                                                className="cross col-md-2 p-0 float-left text-right">
                                                    <i className={(this.state.nameHover === elem) ? "fa fa-times" : "invisible"}  ></i>
                                                </div>
                                            </div>
                        
                            if(elem === this.state.titleClick){
                                console.log("working",this.state.titleClick)
                                // this.setState({top})
                                showElem = <MsgWindow 
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

