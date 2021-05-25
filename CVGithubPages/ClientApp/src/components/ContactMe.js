import React, { Component } from 'react';

export default class ContactMe extends Component {
  render() {
    return (

      <section className="bg-light py-5" id="ContactMe">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h2 className="fw-bolder">Hör gärna av dig!</h2>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <form>
                <div className="form-floating mb-3">
                  <input className="form-control" id="inputName" type="text" placeholder="Skriv ditt namn här..." />
                  <label for="inputName">Namn</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="inputEmail" type="email" placeholder="email@example.se" />
                  <label for="inputEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="inputPhone" type="tel" placeholder="(123) 456-7890" />
                  <label for="inputPhone">telefonnummer</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="inputMessage" type="text" placeholder="Skriv ditt meddelande här..." style={{ height: '10rem' }}></textarea>
                  <label for="inputMessage">Meddelande</label>
                </div>
                <div className="d-grid"><button className="btn btn-primary btn-lg" type="submit">Skicka!</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>


      );
  }
}