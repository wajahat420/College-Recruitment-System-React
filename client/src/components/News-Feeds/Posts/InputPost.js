import React, { Component } from 'react'
import "../../../css/Posts.css"
import {connect} from "react-redux";
import axios from 'axios';


class Posts extends Component {

    constructor(){
        super()
        axios.get("/fetchAllPosts")
        .then(res=>{
            this.props.postAllPosts(res.data)
        })
        .catch(err=>alert("error "+err))
    }

    state = {
        text : "",
        imageURL : "",
        loading : false,
        showImg : false
    }

    file = (event) =>  {
        const input = event.target;
        // console.log("event",event.target.value)
        const reader = new FileReader();
        reader.onload = () => {
            // console.log("onload ")

            const dataURL = reader.result;
            // const fileName = input.files[0].name
            this.setState({imageURL : dataURL})
            // console.log("dataURL",dataURL)
            // this.encodeBase64(dataURL)

        }
        reader.readAsDataURL(input.files[0]);

        reader.onloadstart = () => {
            this.setState({loading  : true})
            console.log("load start")
        }
        reader.onloadend = () => {
            // this.props.URLOnInputPost(this.state.imageURL)
            this.setState({loading  : false,showImg : true})
            console.log("load end")
        } 

    }

    post = () => {
        const{text,imageURL} = this.state
        const {signin} = this.props
        // console.log("state",this.state)
        if((text ||   imageURL) && signin !== ""){
            axios.post("/uploadPost",{
                fullName : signin.firstName + " " + signin.lastName,
                text,
                imageURL
            })
            .then(()=>{
                console.log("inside then")
                this.props.postInput(text,imageURL)
                this.setState({showImg : false,text:"",imageURL : ""})
            })
            .catch(err=>alert("error " + err))
        }
    }

    render() {

        return (
            <div className={(this.props.signin.as === "student"? "d-none":"" )+" float-left col-9  p-0 "}>
                <div className="Posts">
                    <div className="create-post m-auto col-sm-10 col-md-7 ">Create Post</div>
                    <div className="  col-sm-10 col-md-7 m-auto p-0">
                        <textarea className="col-md-12 p-3 m-0 h-7"
                          placeholder="What's in your mind?"
                          onChange={(event)=> this.setState({text : event.target.value})}
                          value={this.state.text}/>
                    </div>
                    <div className={this.state.showImg ? "col-md-4 m-auto p-0 pb-2 " : "d-none" }>
                        <img height="150px" width="100%"  alt="not found" src={this.state.imageURL} />
                    </div>
                    <div className="image row m-auto p-2  col-sm-10 col-md-7">
                        <div className="col-md-9">
                            <label htmlFor="photo" className="p-2 m-0">
                                Image
                            </label>
                            <input   
                                type="file"
                                onChange={this.file}
                                style={{top : "-200em" ,position:"absolute"}}
                                id="photo"
                            />

                        </div>
                        <div className="col-md-3">
                            <input 
                                className="col-md-12 btn btn-primary input-lg"
                                type="Button" defaultValue="Post" 
                                onClick = {this.post}
                                disabled={this.state.loading}
                            />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        userLogin : state.userLogin,
        signin : state.signin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        postInput : (text ,URL)  => {
            dispatch({
                type : "INSERT_POST",
                postText : text ,
                imageURL : URL,
            }) 
        },
        postAllPosts : (posts) =>{
            dispatch({
                type : "ALL_POSTS",
                allPosts : posts
            })
        }
    }
}
  


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
