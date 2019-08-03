import React from "react"
import "../../../css/sidebar.css"
import {connect} from "react-redux";
import axios from "axios"

class SideBar extends React.Component{

    constructor(){
        super()
        axios.get("/fetchStudentsFromDB")
        .then(res=>{
            this.props.setStudents(res.data)
            // console.log("res.data",res.data)
        })
        .catch(err => alert("error "+err))


    }

    onClick = (receiver) => {
        let valid = true
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
        <div className={(this.props.signin.as==="student"?"d-none":"")+" sidebar text-center position-fixed  col-3 p-0"}>
            
            {this.props.students.map((elem,index)=>{
                return(
                    <div className={(this.props.getReceiver === elem.firstName ? "receiver " : "") + "p-2"  }
                         onClick={() => this.onClick(elem.firstName)} 
                         key={index}
                     >
                        <div className="col-12 p-0 ">
                            {elem.firstName}
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
        signin : state.signin,
        students : state.students,
        msgBoxTitlesArr : state.msgBoxTitles,
        getSignin : state.signin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        msgBoxTitles : (arr)  => {
            dispatch({
                type : "MSG_BOX_TITLES",
                msgBoxTitles : arr
            }) 
        },
        setSignin : (index) => {
            dispatch({
                type : "SET_SIGNIN",
                signin : index
            })
        },
        setStudents : (arr) =>{
            dispatch({
                type : "STUDENTS",
                students : arr
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
