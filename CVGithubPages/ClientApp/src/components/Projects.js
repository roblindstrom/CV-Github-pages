import React, { Component } from "react";
import { Link } from 'react-router-dom';


export class Projects extends Component {
  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">

          
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="100">

                  <rect
                    width="100%"
                    height="100%"
                    fill="#11111c" />

              <text
                className="text-center"
                x="45%"
                y="50%"
                    fill="#eceeef"
                >{ this.props.title }</text></svg>

                <div className="card-body">
              <p className="card-text">{this.props.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                  <Link type="button"
                    className="btn btn-sm btn-outline-secondary" to={{ pathname: this.props.githublink }} target="_blank">Github länk</Link>
                    </div>
                <small className="text-muted">{ this.props.languages}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      
      
      );
  }
}