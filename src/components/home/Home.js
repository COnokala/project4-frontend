import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom"
import './Home.css'


class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        description:"Check out these Location!"
      }
      this.displayOsaka= this.displayOsaka.bind(this)
      this.displayYokohama=this.displayYokohama.bind(this)
      this.displaySolo=this.displaySolo.bind(this)

     }
     
     displayOsaka(evt){
       evt.preventDefault();
       this.setState({description: "Osaka's Best Sights", })
     }
     displayYokohama(evt){
      evt.preventDefault();
      this.setState({description: "Yokohama's new sights and tours"})
    }
    displaySolo(evt){
      evt.preventDefault();
      this.setState({description: "Check out these user submitted Photos"})
    }
     render(){
       return(
      <div className="main">
         <div className="FirstText">
         <h1 className="title">Sightseeing Photos</h1>
      </div>
      <div className="osaka" onClick={this.displayOsaka}>
        <h1 className="osakaWords">Osaka's Gallery</h1>
      </div>
      <div className="yokohama" onClick={this.displayYokohama}>
        <h1 className="yokohamaWords">Yokohama's Gallery</h1>
      </div>
      <div className="photo" onClick={this.displayPhoto}>
        <h1 className="photoWords">User Photos</h1>
      </div>
      <div className="text">
      <h1 className="textWords">{this.state.description}</h1>
      </div>
        </div>
       )
     }
    
  }
  
  export default Home;