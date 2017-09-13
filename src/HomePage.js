import React from 'react';
import './App.css';
import pic6 from './images/Building9.jpg'

export default class HomePage extends React.Component{
  //header should be a component with navigation
  //main search contains search component
 // about is a compnent
 //footer is a component
  render(){

    const navLinks = ['Find Apartment', 'List Apartment', 'Facebook', 'Instagram']
    // var divStyle = {
    //   backgroundImage: house,
    //   backgroundSize: 'cover'
    // };
    // console.log(divStyle)
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
          <div className="mainsearch" style={{backgroundImage: `${pic6}`}}>

            <form action="">
              <div className="searchtitle">Find Your Next Rental Now</div>
              <select className='borderrounded'>
                <option value='disabled'  disabled>SELECT A SEARCH AREA</option>
                <option value="mamba point">Mamba Point</option>
                <option value="down town" defaultValue>Down Town</option>
                <option value="sinkor">Sinkor</option>
                <option value="old road">Old Road</option>
                <option value="congo town">Congo Town</option>

              </select>

              <button className='borderrounded'>Search <i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
          </div>
          <div className="about">
          </div>
          <footer>

          </footer>
        </div>

      )
  }
}
