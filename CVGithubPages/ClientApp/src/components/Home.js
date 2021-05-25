import React, { Component } from 'react';
import  HeaderFrontPage  from './HeaderFrontPage';
import { Working9to5 } from './Working9to5';
import { Education } from './Education';
import ContactMe from './ContactMe';
import { Projects } from './Projects';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
                <a className="navbar-brand" href="#!">Robin Lindstr�m</a>
            
            <div className="" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#working9to5">About Me</a></li>
                <li className="nav-item"><a className="nav-link" href="#ContactMe">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>


        
        <HeaderFrontPage></HeaderFrontPage>
        <div className="text-center">
          <h1 >Tidigare projekt:</h1>
        </div>

        <Projects title="RestaurantReview" githublink="https://github.com/roblindstrom/WebbApplikation" description="Grupp-projekt - Skapade en fullstack hemsida d�r man kan ge reviews p� restauranger." languages="C#, Javascript, HTML, CSS"></Projects>

        <Projects title="BicycleRentalV2" githublink="https://github.com/roblindstrom/BicycleRentalV2" description="Mitt andra f�rs�k till en solid Backend API med focus p� att kunna scala upp projektet med hj�lp utav Clean Architecture. " languages="C#"></Projects>

        <Projects title="BicycleRental" githublink="https://github.com/roblindstrom/BicycleRent" description="Mitt f�rsta Backend API, uppdelat i flera lager f�r att h�lla h�g seperation of concerns, " languages="C#"></Projects>
        
        <Projects title="FruitShop" githublink="https://github.com/roblindstrom/BicycleRentalV2" description="Grupp-projekt - M�let var att skapa en simpel shop i en Consol Application, " languages="C#"></Projects>

        <div className="text-center">
          <h1 >Tidigare jobb:</h1>
          </div>
             

        <div className="row">
          <div className="col-md-4">
            <Working9to5
              mainText="Serviceinriktat jobb d�r punktlighet och l�sningsorienterat t�nkade �r viktiga 
verktyg f�r ett bra utf�rt arbete."
              titel="T�gv�rd, SJ G�talandst�g"
              websitelink="https://www.sj.se/sv/hem.html#/"></Working9to5>
          </div>


          <div className="col-md-4">
            <Working9to5
              mainText="Arbetade bra i h�gt tempo och en snabbt f�r�nderlig milj�!"
              titel="Kundtj�nst, Telia"
              websitelink="https://www.telia.se/privat"></Working9to5>
          </div>


          <div className="col-md-4">
            <Working9to5
              mainText="Arbetade tillsammans med andra teammedlemmar f�r att uppn� s�ljresultat 
ifr�n Mariestad till �ngelholm!"
              titel="F�lts�ljare, Telenor"
              websitelink="https://www.telenor.se/"></Working9to5>
          </div>
        </div>

        <div className="text-center">
          <h1 >Utbildningar:</h1>
        </div>

        
        <Education mainText="Objektorienterad Systemutveckling" schoolname="Handelsakademin"></Education>
        
        
        <Education mainText="Hotel och Restaurang" schoolname="Ester Mosessons Gymnasium"></Education>
          

        <ContactMe></ContactMe>
        
        
        <footer className="py-5 bg-dark">
          <div className="container px-5"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
        
        </div>
    
    );
  }
}
