import React, { Component } from 'react'
import {connect} from "react-redux"

import InfoBoxes from "./infoBox"
import IMG from "../../images/1.jpg"
import axios from "axios"



 class AllBoxes extends Component {

    constructor(){
        super()
        axios.get("/getAllStudentsData")
        .then(res=>{
            this.setState({users : res.data})
        })
    }

    state = {
        users : []
    }

    filterArray = (usersObj) => {

        const {signin,searchText,sortBy} = this.props
        
        usersObj.name = usersObj.email.slice(0,usersObj.email.indexOf("@"))
        let signinUsername = signin.email.slice(0,signin.email.indexOf("@"))

        if(searchText !== ""){
            if(sortBy === "name"){
                return  usersObj.name.toLowerCase().includes(searchText.toLowerCase())
            }
            return usersObj.cgpa.includes(searchText)
        }
        else if(signin.as === "university"){
            return true
        }
        else if(signinUsername.toLowerCase() === usersObj.name.toLowerCase()){
            return true
        }
        return false
        
    }

    render() {
        return (
            <div style={{minWidth : "350px"}} className=" col-md-12 text-center p-0">
                {
                    this.state.users.filter((obj) => this.filterArray(obj)).map((elem,index)=>{

                        elem.name =  elem.email.slice(0,elem.email.indexOf("@"))

                        return (
                                <div 
                                key={index} 
                                className={ (this.props.signin.as === "student" ? "col-md-5" : "col-md-3") +"  m-auto d-inline-block p-2"}>
                                    <InfoBoxes
                                        cgpa={elem.cgpa}
                                        img ={IMG}
                                        name={elem.name}
                                        />
                                </div>
                        )
                    })
                }
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return{
        users : state.users,
        signin : state.signin,
        searchText : state.searchText,
        sortBy : state.sortBy
    }
}
const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(AllBoxes)
