import React, { Component } from 'react'
import SigninUI from "./Signin-UI.js"

export default class Signin extends Component {
    state = {
        email : "",
        password : ""
    }
    change = (event) => {
        console.log("event",event.target.value)
        this.setState({[event.target.name] : event.target.value})
    }
    render() {
        return (
            <SigninUI change={this.change} onSubmit={this.onSubmit}/>
        )
    }
}
