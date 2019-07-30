import React from 'react'
import "../../css/infoBox.css"

class infoBox extends React.Component {
    render(){

            return (
                <div className="col-md-12 border p-2 infoBox">
                
                        <div className="img col-md-12 p-0">
                            <img height="200px" width="100%" className=" p-0" src={this.props.img} alt="no img Found"/>
                        </div>
                        
                        {/* <div style={{left:"0px",top:"0px",height:"200px"}}
                             className="position-absolute col-md-12 mt-2 p-0">
                            <div style={{backgroundColor:"blue",height:"200px"}}
                                 className=" col-md-11 m-auto p-0">
                            </div>
                        </div> */}
                        <p style={{backgroundColor:"gray",color:"white",borderBottom:"1px solid black"}}
                            className="text-center mb-0   p-0">{this.props.name}</p>
                        <p style={{backgroundColor:"gray",color:"white",borderBottom:"1px solid black"}}
                            className="text-center mb-0  p-0">CGPA : {this.props.cgpa}</p>
                        <small className="p-0">Description about you if you want to say about yourself for more info..</small>
                        <div className="row col-md-12 ml-0 p-0 mt-1 footer">
                            <div className="col-md-6 p-0">
                                <small  className=" d-inline-block  p-0  ">Marksheet</small>
                            </div>
                            <div className="col-md-6 p-0 text-right">
                                <small  className="d-inline-block   p-0">Resume</small>
                            </div>
                        </div>
                    </div>
                // </div>
            )
        }
    }
export default  infoBox
