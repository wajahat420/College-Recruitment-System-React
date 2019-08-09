import React, { Component } from 'react'
import "../../css/uploadStudentData.css"

export default class uploadStudentData extends Component {
    state={
        marksheetName : "",
        cvName : "",
        name : "",
        cgpa : "",
        marksheet :"",
        cv: "",
        image : "",
        uploaded : ""
    }

    Submit = () => {
        const {cv,marksheet,name,cgpa,image} = this.state
        if(cv && marksheet && name && cgpa && image){
            console.log("All True")
        }
    }
    file = (event) =>  {
        // console.log("working",event.target.name)
        const name = event.target.name
        const input = event.target;
        const fileName = event.target.files[0].name

        const reader = new FileReader();
        reader.onload = () => {

            const dataURL = reader.result;
            // console.log(dataURL)
            if(name==="marksheet"){
                this.setState({marksheet : dataURL,marksheetName : fileName})
            }else if(name === "cv"){
                this.setState({cv : dataURL,cvName : fileName})
            }else{
                this.setState({image : dataURL,uploaded : "Uploaded"})
            }


        }
        reader.readAsDataURL(input.files[0]);

        reader.onloadstart = () => {
            console.log("load start")
        }
        reader.onloadend = () => {      
            console.log("load end")
        } 

    }

    
    render() {
        // console.log("state",this.state)
        return (
            <div className="col-md-12 p-3">
                <div 
                     className="col-md-6 m-auto p-2 border uploadStudent">
                    <table className="col-md-12 text-center">
                        <tbody >
                            <tr >
                                <td style={{width : "40%"}} >
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
                                        name="marksheet"
                                        id="marksheet" 
                                        onChange={ this.file}
                                        className="d-none"  
                                        type="file"/>
                                </td>
                                <td >
                                    <p  className={(this.state.marksheetName === "" ? "p-2" : "") +" m-0  col-md-12"}>{this.state.marksheetName}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label 
                                        htmlFor="cv" 
                                        style={{cursor:"pointer"}}
                                        className="col-md-12  p-0">Upload CV</label>
                                    <input
                                        name="cv"
                                        id="cv"
                                        onChange={ this.file}
                                        className="d-none"  
                                        type="file"/>
                                </td>
                                <td>
                                    <p   className={(this.state.cvName === "" ? "p-2" : " ") +" m-0   col-md-12"}>{this.state.cvName}</p> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label 
                                        htmlFor="image" 
                                        style={{cursor:"pointer"}}
                                        className="col-md-12  p-0">Upload image</label>
                                    <input
                                        name="image"
                                        id="image"
                                        onChange={ this.file}
                                        className="d-none"  
                                        type="file"/>
                                </td>
                                <td>
                                    <p   className={(this.state.image === "" ? "p-2 mt-3" : "") +"    col-md-12"}>{this.state.uploaded}</p> 
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
