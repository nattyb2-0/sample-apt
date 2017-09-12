import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'
import apartments from './data.js'
import axios from 'axios';
import AptListing from './AptListing.js'
import pic from './jpg.png';
import _ from 'lodash';
import Form from './Form.js';
import moment from 'moment'
console.log(pic)
class App extends Component {
  constructor(){
    super();
    this.state ={
      data: [],
      showForm:false,
      time: ""
    }
    this.onDelete = this.onDelete.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.gettime = this.gettime.bind(this)
  }

onDelete(item){
  let allApts = this.state.data;
  console.log(allApts)
  let AptsAfterRemove = _.without(allApts,item);
  let dew =this.state.data;
  let newDew = _.forEach(dew, (key,value)=>{
      return key !== key


  })
  console.log(newDew)
  console.log(AptsAfterRemove)
  this.setState({
    data:AptsAfterRemove
  })
  console.log(this.state.data)
}

toggleForm(){
  this.state.showForm ? this.setState({showForm:false}) : this.setState({showForm: true})
}

gettime(){

  let time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  console.log(time)
  var start = moment([2017, 8, 24]);
var end   = moment();
console.log(end.to(start));
console.log(start)
console.log(end)
this.setState({
  time: time
})    // "5 days ago"

}



     componentWillMount(){

      this.setState({
        data:apartments
      })
      // this.interval = setInterval(this.gettime, 1000)
    }

    componentWillUnmount(){
       // clearInterval(this.interval)
    }

  render() {
       let newlist = _.filter(this.state.data, { 'location': 'mamba point'});
      // console.log(newlist)
      // console.log('yerrr')
    return (
      <div className="App">
        <div>
        {this.state.time}
        </div>
        <Form showForm={this.state.showForm} toggleForm= {this.toggleForm}/>
        <AptListing apts={this.state.data} onDelete={this.onDelete}/>
        <button onClick={this.gettime}>GET TIME</button>
      </div>
    );
  }
}

export default App;
