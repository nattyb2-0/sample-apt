import React from 'react';
// import './App.css';
import pic1 from './images/Building11.jpg'
import pic2 from './images/Building4.jpg'
import pic3 from './images/Building5.jpg'
import pic4 from './images/Building7.jpg'
import pic5 from './images/Building8.jpg'
import pic6 from './images/Building9.jpg'


export default class Apartment extends React.Component{

  handleDelete(){
      this.props.onDelete(this.props.whichItem);
    }

  render(){
    // console.log(this.props)
    let my = this.props.apartment
    let items = this.props.apartment.ammenities;
    items = items.map((item,i)=>{
      // console.log('this is item'+item)
      return(
        <li key={i}>{item}</li>
        )
    })
    return(
      <div className='apartmentList'>
        <div className={my.verified == true ? 'green': 'red'}></div>
        <h1>{my.aptName}</h1>
        <h2>{my.location}</h2>
        <h2>{my.address}</h2>
        <h2>{my.aptType}</h2>
        <h2>{my.price}</h2>
        <h2>{my.leaseType}</h2>
        <h2>{my.bathrooms}</h2>
        <h2>{my.bedrooms}</h2>
        <h2>{my.electricity}</h2>
        <h2>Ammenities:
          <ul>
            {items=='' ? 'None': items}
          </ul>
        </h2>
        <img src={pic1} alt=""/>
        <img src={pic2} alt=""/>
        <img src={pic3} alt=""/>
        <img src={pic4} alt=""/>
        <img src={pic5} alt=""/>
        <img src={pic6} alt=""/>
         <button onClick={this.handleDelete.bind(this)}>remove from search result</button>
      </div>)
  }
}
