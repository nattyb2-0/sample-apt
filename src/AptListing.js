import React from 'react';
import Apartment from './Apartment.js'


export default class AptListing extends React.Component{


  render(){
    let apartments = this.props.apts

    apartments = apartments.map((apt,i)=>{
      return(

            <Apartment key={i} apartment={apt} whichItem={i} onDelete={this.props.onDelete}/>


        )
    })
   return(
   <div className='flex'>
     {apartments}
   </div>
    )
  }
}
