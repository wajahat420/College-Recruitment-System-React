import React from "react"
import "../../../css/sidebar.css"

class SideBar extends React.Component{
   
    render(){
        
    return(

       <div className="sidebar col-md-12 p-0">

            <div className="float-right col-md-3 p-0">
                {this.props.users.map((elem,index)=>{
                    return(
                        <div className={this.props.getReceiver === elem ? "onBoth receiver text-center p-2 h5 m-0" : "onBoth text-center p-2 h5 m-0 "  }
                            onDoubleClick={() => this.props.setSignin(elem)}
                            onClick={() => this.props.setReceiver(elem)} key={index}
                        >
                            <span className={this.props.getSignin === elem ? "float-left" : "float-left displayNone "}>
                                *
                            </span>
                            {elem}
                        </div>
                    )
                })
            }
            </div>
       </div>
    )
            
        
    }
}
export default SideBar