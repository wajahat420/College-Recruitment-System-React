import React, { Component } from 'react'
import AllBoxes from "./AllBoxes"
import UploadStudentData from "./uploadStudentData"
import SearchBar from "./searchBar"
import {connect} from "react-redux"

class Main extends Component {
   
    render() {
        return (
            <div>
                <div className={(this.props.signin.as === "student" || this.props.signin === "") ? "d-none":""}>
                    <SearchBar/>
                </div>
                <div className={(this.props.signin.as !== "student" || this.props.signin === "") ? "d-none":""}>
                    <UploadStudentData/>
                </div>
                <div>
                    <AllBoxes/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        signin : state.signin
    }
}


export default connect(mapStateToProps)(Main)
