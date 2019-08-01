import React, { Component } from 'react'
import AllBoxes from "./AllBoxes"
import UploadStudentData from "./uploadStudentData"
import axios from "axios"

export default class main extends Component {
    constructor(){
        super()
        // axios.get("/studentDataUpload")
        // .then(res=> console.log("successfully uploaded "))
        // .catch(err=>console.log("error",err))
    }
    render() {
        return (
            <div>
                <UploadStudentData/>
                <AllBoxes/>
            </div>
        )
    }
}
