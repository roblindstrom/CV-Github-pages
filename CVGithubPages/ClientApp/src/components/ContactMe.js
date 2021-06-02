import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

export default class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      name: '',
      email: '',
      phonenumber: '',
    };

    init("user_weehYpw0TqvvCodcnpC9k");

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }
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
              <form className="test-mailing">
                <div className="form-floating mb-3">
                  <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    id="name"
                    name="name"
                    required
                    className="form-control"
                    type="text"
                    placeholder="Skriv ditt namn här..." />
                  <label for="inputName">Namn</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    id="email"
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="email@example.se" />
                  <label for="inputEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={this.state.phonenumber}
                    onChange={this.handleChange}
                    id="phonenumber"
                    name="phonenumber"
                    className="form-control"
                    type="tel"
                    placeholder="(123) 456-7890" />
                  <label for="inputPhone">telefonnummer</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                    id="message"
                    name="message"
                    className="form-control"
                    type="text"
                    placeholder="Skriv ditt meddelande här..."
                    style={{ height: '10rem' }}></textarea>
                  <label for="inputMessage">Meddelande</label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" value="Submit" onClick={this.handleSubmit} type="submit">Skicka!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    );

    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value,  })
  };

  handleSubmit(event) {
    event.preventDefault();
    const templateId = 'template_wpdj2g9';

    this.sendEmail(templateId, { message: this.state.message, name: this.state.name, email: this.state.email, phonenumber: this.state.phonenumber })
  };

  sendEmail(templateId, message, name, email, phonenumber) {
    debugger;
    emailjs.send(
      'service_cvanp07',
      templateId,
      message,
      name,
      email,
      phonenumber
    ).then(res => {
      console.log('Email successfully sent!')
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}