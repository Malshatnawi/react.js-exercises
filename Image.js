import React, { Component } from "react";
import logo from "./logo.svg";





class Image extends Component{
    render() {
        return (

            <img src={this.props.studentImage2} alt="Logo" style={{width:"33%"}} />
        );
      }
    


}


export default Image;