import React, { Component } from "react";


export class Education extends Component {
  render() {
    return (
      
      <div className="card border-primary w-50 mx-auto ">
        <div className="card-header"></div>
        <div className="card-body text-primary">
          <h5 className="card-title">{this.props.schoolname}</h5>
          <p className="card-text"> {this.props.mainText }</p>
        </div>
      </div>
      )
  }
}