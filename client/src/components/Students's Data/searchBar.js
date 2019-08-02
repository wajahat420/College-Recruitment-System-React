import React, { Component } from 'react'
import {connect} from "react-redux"

class SearchBar extends Component {
    render() {
        return (
            <div className="col-md-12 m-3">
                <div className="col-md-8 m-auto">
                    <input 
                        onChange ={(e)=> this.props.searchingText(e.target.value)}
                        className="col-md-12 h4  p-2" type="text" placeholder="Search Students"/>
                    <div className="row ml-0">
                        <div className="">Search by : </div>
                        <div className="col-2">
                            <label style={{cursor:"pointer"}} className="col-9 p-0" htmlFor="name">NAME</label>
                            <input 
                                defaultChecked={true}
                                style={{cursor:"pointer"}}
                                className="col-3 "
                                onClick={()=>this.props.sortBy("name")}
                                id="name" name="a" type="radio"/>
                        </div>
                        <div className="col-2">
                            <label style={{cursor:"pointer"}} className="col-9  p-0" htmlFor="cgpa">CGPA</label>
                            <input 
                                style={{cursor:"pointer"}}
                                className= "col-3"
                                onClick={()=>this.props.sortBy("cgpa")}
                                id="cgpa" name="a" type="radio"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        searchingText : (text) =>{
            dispatch({
                type : "SEARCH_TEXT",
                searchText : text
            })
        },
        sortBy : (sortBy) =>{
            dispatch({
                type  : "SORT_BY",
                sortBy
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
