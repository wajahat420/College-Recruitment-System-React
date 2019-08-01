import React from 'react'
import "../../css/infoBox.css"

import download from "../../images/b2.jpg"
class infoBox extends React.Component {
    render(){

            return (
                <div className="col-md-12 border p-2 infoBox">
                
                        <div className="img col-md-12 p-0">
                            <img height="200px" width="100%" className=" p-0" src={this.props.img} alt="no img Found"/>
                        </div>
                        
                        <p style={{backgroundColor:"gray",color:"white",borderBottom:"1px solid black"}}
                            className="text-center mb-0   p-0">{this.props.name}</p>
                        <p style={{backgroundColor:"gray",color:"white",borderBottom:"1px solid black"}}
                            className="text-center mb-0  p-0">CGPA : {this.props.cgpa}</p>
                        <small className="p-0">Description about you if you want to say about yourself for more info..</small>
                        <div className="row col-md-12 ml-0 p-0 mt-1 footer">
                            <div className="col-md-6 p-0">
                                <a href="#" className=" d-inline-block  p-0  ">Marksheet</a>
                            </div>
                            <div className="col-md-6 p-0 text-right">
                                <a href={download} download={download} className="d-inline-block   p-0">Resume</a>
                            </div>
                        </div>
                    </div>
            )
        }
    }
export default  infoBox
