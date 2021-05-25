import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Working9to5 extends Component {
  render() {
    return (
      
      <div className="card text-center" id="working9to5">
        <div className="card-body d-flex flex-column" style={{ height: "250px"}}>
          <h5 className="card-title">{this.props.titel}</h5>
          <p className="card-text">{this.props.mainText}</p>
          <Link className=" btn btn-primary mt-auto" to={{ pathname: this.props.websitelink }} target="_blank"  >Hemsida</Link>
          
        </div>
      </div>
           
             
      
    );
  }
}