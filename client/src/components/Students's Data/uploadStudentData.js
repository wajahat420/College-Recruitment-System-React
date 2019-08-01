import React, { Component } from 'react'
import "../../css/uploadStudentData.css"

export default class uploadStudentData extends Component {
    state={
        marksheetName : "",
        cvName : "",
        name : "",
        cgpa : ""
    }

    Submit = () => {
        console.log("state",this.state)
    }
    render() {
        // console.log("marksheet",this.state.marksheetName)
        return (
            <div className="col-md-12 p-3">
                <div 
                     className="col-md-6 m-auto p-2 border uploadStudent">
                    <table className="col-md-12 text-center">
                        <tbody className="">
                            <tr className="">
                                <td style={{width : "40%"}} className="">
                                    <label  htmlFor="name">Name : </label>
                                </td>
                                <td style={{width : "90%"}}>
                                    <input
                                        onChange={(e) => this.setState({name : e.target.value})}
                                        id="name" className="col-md-12 text-center p-1"  type="text" placeholder=""/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cgpa">CGPA : </label>
                                </td>
                                <td><input 
                                        onChange ={(e)=>this.setState({cgpa : e.target.value})}
                                        id="cgpa" className="col-md-12 text-center p-1"  type="number" placeholder=""/></td>
                            </tr>
                            <tr>
                                <td>
                                    <label 
                                        htmlFor="marksheet" 
                                        style={{cursor:"pointer"}}
                                        className="col-md-12 p-0">Upload Marksheet</label>
                                    <input 
                                        id="marksheet" 
                                        onChange={(e) => this.setState({marksheetName : e.target.files[0].name})}
                                        className="d-none"  type="file"/>
                                </td>
                                <td className="">
                                    <p  className={(this.state.marksheetName === "" ? "p-2" : "") +" m-0 mw-100 col-md-12"}>{this.state.marksheetName}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className=" ">
                                    <label 
                                        htmlFor="cv" 
                                        style={{cursor:"pointer"}}
                                        className="col-md-12  p-0">Upload CV</label>
                                    <input
                                        id="cv"
                                        onChange={(e) => this.setState({cvName : e.target.files[0].name})}
                                        className="d-none"  type="file"/>
                                </td>
                                <td>
                                    <p   className={(this.state.cvName === "" ? "p-2" : " ") +" m-0   col-md-12"}>{this.state.cvName}</p> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
             
                    {/*  Button  */}
                    <div className="col-md-4 mt-3 ml-auto mr-auto p-0">
                        <input 
                            onClick={this.Submit}
                            className="col-md-12 btn btn-primary " type="button" value="SUBMIT"
                            disabled={(this.state.cvName === "" || this.state.marksheetName === "")}/>
                    </div>
                </div>
            </div>
        )
    }
}
