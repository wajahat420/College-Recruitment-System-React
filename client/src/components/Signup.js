import React, { Component } from 'react'
import "../css/Signup.css"
import axios from "axios"

class Signup extends Component {
    constructor(){
        super()
        this.state ={
            first_name : "",
            last_name : "",
            password : "",
            email : "",
            as : "student"
        }
    }

    change = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        console.log("working")
        const {first_name,last_name,email,password,as} = this.state
        if(first_name && last_name && email && password){
            axios.post("/signup",{
                first_name,
                last_name,
                email,
                password,
                as 
            })
            .then(res=>{
                console.log("res.data",res.data)
                if(res.data){
                    alert("Successfully Uploaded Data")
                    this.setState({first_name:"",last_name:"",email:"",password:""})
                }
                else{alert("Invalid Email")}
            })
        }
        // console.log("state",this.state)
        // console.log("working")
    }


    render() {
        // console.log("state",this.state)
        const {first_name,last_name,password,email} = this.state

        return (
        <main className="Signup col-md-12">
            <h1 className="m-4">College Recruitment</h1>
            <div className="col-md-6 m-auto">
                <form onSubmit={this.onSubmit} className="">
                    <input className="col-md-12 text-center p-3 m-2 h5" value={first_name}  required={true}  onChange={this.change} name="first_name" placeholder="First Name" type="text"/>
                    <input className="col-md-12 text-center p-3 m-2 h5" value={last_name} required={true} onChange={this.change} name="last_name" placeholder="Last Name" type="text"/>
                    <input className="col-md-12 text-center p-3 m-2 h5" value={email} required={true} onChange={this.change} name="email" placeholder="Email"  type="text"/>
                    <input className="col-md-12 text-center p-3 m-2 h5" value={password} required={true} onChange={this.change} name="password" placeholder="Password" type="password"/>
                    <div className="row col-md-10 text-center p-0 m-auto  radios ">
                        <div  className="col-4 div">
                            Signup as : 
                        </div>
                        <div className="col-4">
                            <label style={{cursor:"pointer"}} className="col-9 p-0" htmlFor="name">Student</label>
                            <input 
                                defaultChecked={true}
                                style={{cursor:"pointer"}}
                                className="col-3 "
                                onClick={()=>this.setState({as:"student"})}
                                id="name" name="a" type="radio"/>
                        </div>
                        <div className="col-4 p-0">
                            <label style={{cursor:"pointer"}} className="col-9 p-0" htmlFor="name">University</label>
                            <input 
                                style={{cursor:"pointer"}}
                                className="col-3 "
                                onClick={()=>this.setState({as : "university"})}
                                id="name" name="a" type="radio"/>
                        </div>
                    </div>
                    <input className="col-md-12 text-center p-3 m-2 h5" required={true}   type="Submit" defaultValue="Signup"/>

                </form>
            </div>
        </main>
        )
    }
}

export default Signup
