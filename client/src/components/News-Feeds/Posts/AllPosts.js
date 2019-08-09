import React, { Component } from 'react'
import OutputPostUI from "./OutputPostUI"
import {connect} from "react-redux";
import axios from "axios"

 class AllPosts extends Component {

    like = (id,index) =>{

        const{signin} = this.props
        console.log("id is",signin.email)
        axios.post("/LikeClicked",{
            postId : id,
            email : signin.email
        })
        .catch(err=>alert("error "+err))
        this.props.toggleLike(index)
    }

    render() {
        console.log("render...")
        return (
            this.props.AllPosts.map((elem,index)=>{
                // console.log("likes",elem.likes)
                const {signin} = this.props
                console.log("eee",elem.likes)
                if(elem.like === undefined){
                    let like = false
                    elem.likes.forEach((element)=>{
                    if(signin.email === element){
                        like = true
                    }
                    elem.like = like
                    })  
                }
                console.log("elem",elem.name)
                return(
                    <OutputPostUI 
                        key = {index}
                        name = {elem.name}
                        postText={elem.text}
                        imageURL={elem.img}
                        getLikeFromDb = {elem.like}
                        like={()=>this.like(elem.postId,index)}
                        />
                )
            })
        )
    }
}


const mapStateToProps = (state) => {
    return {
        signin : state.signin,
        AllPosts : state.AllPosts
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        toggleLike : (index)=>{
            dispatch({
                type : "LIKE",
                index
            })
        }

    }
}


  


export default connect(mapStateToProps,mapDispatchToProps)(AllPosts);
