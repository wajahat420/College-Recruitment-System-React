import React from "react"
import "../../../css/sidebar.css"
import {connect} from "react-redux";

class SideBar extends React.Component{
    
    onClick = (receiver) => {
        let valid = true
        this.props.setReceiver(receiver)    
        this.props.msgBoxTitlesArr.forEach(elem => {

            if(elem === receiver){
                valid = false
            }
        })
        if(valid){
            let duplicateArr = [...this.props.msgBoxTitlesArr]
            if(this.props.msgBoxTitlesArr.length  === 4){
                duplicateArr[0] = receiver
                this.props.msgBoxTitles(duplicateArr)
            }else{
                duplicateArr.push(receiver)
                this.props.msgBoxTitles(duplicateArr)
            }
        }
    }

    render(){
        
        return(
        <div className="sidebar text-center position-absolute   col-md-3 p-0">
            
            {this.props.users.map((elem,index)=>{
                return(
                    <div className={(this.props.getReceiver === elem ? "receiver " : "") + "p-2"  }
                         onDoubleClick={() => this.props.setSignin(elem)}
                         onClick={() => this.onClick(elem)} key={index}
                     >
                        <small className={(this.props.getSignin === elem ? "" : " displayNone ") + "text-left  float-left  col-md-2 p-0"} >
                            *
                        </small>
                        <div className="col-md-10 p-0 ">
                            {elem}
                        </div>
                     </div>
                )
            })
            }
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        msgBoxTitlesArr : state.msgBoxTitles
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        msgBoxTitles : (arr)  => {
            dispatch({
                type : "MSG_BOX_TITLES",
                msgBoxTitles : arr
            }) 
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
