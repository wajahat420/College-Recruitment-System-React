// import React from 'react'
import InfoBoxes from "./infoBox"

import IMG from "../../images/1.jpg"

import React, { Component } from 'react'

export default class AllBoxes extends Component {

    state ={
        names : ["Hamza","Wajahat","Ali","Atif","Aun","Haider"],
        cgpa : [1.2,3.4,2.5,2.9,1.6]
    }

    render() {
        return (
            this.state.names.map((elem,index)=>{
                return (
                    // <div className="col-md-12 p-0">
                        <div key={index} className="col-md-3  float-left p-2">
                            <InfoBoxes
                                cgpa={this.state.cgpa[index]}
                                img ={IMG}
                                name={elem}/>
                        </div>
                    // </div>
                )
            })
        )
    }
}

