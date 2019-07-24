import React, { Component } from 'react'
import OutputPostUI from "./OutputPostUI"
import {connect} from "react-redux";


 class AllPosts extends Component {
    render() {
        return (
            this.props.AllPosts.map((elem,index)=>{
                return(
                    <OutputPostUI 
                        key = {index}
                        postText={elem.postText}
                        imageURL={elem.imageURL}/>
                )
            })
        )
    }
}


const mapStateToProps = (state) => {
    return {
        AllPosts : state.AllPosts
    }
};


  


export default connect(mapStateToProps)(AllPosts);
