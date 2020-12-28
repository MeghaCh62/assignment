import React, { Component } from 'react'

export default class child_component extends Component {

    // //initially
    // this.props=null
    // this.props.color

    // if(this.props  && this.props.color){

    // }

    // //after re render

    // this.props={
    //     color:color-value
    // }








    render() {

        console.log(this.props,this.props.child_style.color)

        return (
            <center className="bg"><div className="child_component" style={{backgroundColor:this.props.child_style.color,borderRadius:50}}>

               checking background color
                
            </div></center>
        )
    }
}