import React, { Component } from 'react'
import "../css/Signup.css"

class Signup extends Component {
    constructor(){
        super()
        this.state ={
            first_name : "",
            last_name : "",
            phone_no : "",
            password : "",
            email : "",
    
        }
    }

    change = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log("state",this.state)
        console.log("working")
    }


    render() {
        // console.log("state",this.state)
        // const {first_name,last_name,password,email,phone_no} = this.state
        return (
        <main className="Signup">
            <h1>College Recruitment</h1>
            <div className="form">
                <form onSubmit={this.onSubmit} className="all-Inputs">
                    <input required={true} value={this.state.first_name} onChange={this.change} name="first_name" placeholder="First Name" type="text"/>
                    <input required={true} value={this.state.last_name} onChange={this.change} name="last_name" placeholder="Last Name" type="text"/>
                    <input required={true} value={this.state.phone_no} onChange={this.change} name="phone_no" placeholder="Phone No" type="text"/>
                    <input required={true} value={this.state.password} onChange={this.change} name="password" placeholder="Password" type="password"/>
                    <input required={true} value={this.state.email} onChange={this.change} name="email" placeholder="Email" className="address" type="text"/>
                    <input required={true}   type="Submit" defaultValue="Signup"/>
                </form>
            </div>
        </main>
        )
    }
}

export default Signup
