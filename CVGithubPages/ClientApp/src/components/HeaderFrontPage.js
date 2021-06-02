import React, { Component } from "react";

export default class HeaderFrontPage extends Component {

  render() {
    return(
    <header className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <div className="text-center my-5">
              <h1 className="display-5 fw-bolder text-white mb-2">Robin Lindström</h1>
              <h3 className="display-5 fw-bolder text-white mb-2">Systemutvecklare</h3>
              <p className="lead text-white-50 mb-4"> Kunnig Backend utvecklare med erfarenhet inom Fullstack utveckling</p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#working9to5">Läs mer om mig!</a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#ContactMe">Kontakta mig!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
  };
}