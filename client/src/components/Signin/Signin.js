import React, { Component } from 'react'
import SigninUI from "./Signin-UI.js"
import axios from "axios"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

 class Signin extends Component {
    state = {
        email : "",
        password : "",
        redirect : false
    }
    Submit = (e) => {
        // console.log("woolllw")
        // e.preventDefault()
        const {email,password} = this.state
        if(email && password){
            axios.post("/login",{
                email,
                password
            })
            .then(res=>{
                console.log("res",res.data)
                if(res.data.valid){
                    this.props.setSignin(res.data.user)
                    this.setState({redirect : true})
                }
                else{
                    alert("Invalid Signin")
                }
            })
        }
        else{
            alert("Fill All Details")
        }
    }
    change = (event) => {
        // console.log("event",event.target.value)
        this.setState({[event.target.name] : event.target.value})
    }
    render() {
        if(this.state.redirect){
            return <Redirect to="/News_Feeds" />
        }
        return (
            <SigninUI change={this.change} Submit={this.Submit}/>
        )
    }
}
const mapState = (state) =>{
    return{

    }
}
const mapDispatch = (dispatch) =>{
   return{
        setSignin : (signin)=>{
            dispatch({
                type : "SIGNIN",
                signin
            })
        }
   }
}
export default connect(mapState,mapDispatch)(Signin)
