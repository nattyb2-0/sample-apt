import React from 'react';
import './App.css';


export default class HomePage extends React.Component{
  //header should be a component with navigation
  //main search contains search component
 // about is a compnent
 //footer is a component
  render(){

    const navLinks = ['Find Apartment', 'List Apartment', 'Facebook', 'Instagram']

    return(
        <div>
          <header>
            <div className='logo'>
              this is for the logo
            </div>
            <div className='company-title'>
              this is for the company name
            </div>
            <nav>
              <ul>
                 {
                  navLinks.map((link, i)=>{
                  return( <li key={i}><a href={link}>{link}</a></li>)
                  })
                }
              </ul>
            </nav>


          </header>
          <div className="mainsearch">

          </div>
          <div className="about">
          </div>
          <footer>

          </footer>
        </div>

      )
  }
}
