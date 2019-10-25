import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom"
import './App.css';
import Home from '../home/Home'
import Osaka from '../osaka/osaka'
import Yokohama from '../yokohama/yokohama'
import soloPhoto from '../soloPhoto/SoloPhoto'
import ShowYokohama from '../yokohama/sjpwyokohama'
import ShowOsaka from '../showOsaka/showOsaka'
import UpdateImage from '../updateImage/UpdateImage'
import showYokohama from '../showYokohama/showYokohama'



const HOMEHeader = styled.header`
display:flex;
flex-direction:column;
background:linear-gradient(to right, rgba(0,0,0,1), rgba(136,136,136,0.25));
height:46px;
width:100%;
top:0;
position:fixed;
color:white;
font-size:18px;
@media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 910px) {
    font-size: 14px;
  }
  @media (max-width: 850px) {
    font-size: 12px;
  }
  @media (max-width: 750px) {
    font-size: 10px;
  }
  @media (max-width: 670px) {
    font-size: 8px;
  }
  @media (max-width: 575px) {
    font-size: 6px;
  }
  @media (max-width: 475px) {
    font-size: 4px;
  }
`
const HOMEfooter = styled.footer`
background-color:rgba(0, 0, 0, 0.55);
height:46px;
width:100%;
bottom:0;
position:fixed;
color:white;
`

class App extends Component {
  constructor(props){
    super(props)
   }
   render(){
     return(
    <div className="App">
       <HOMEHeader >
        <ul>
          <Link to ="/">
          <li>Home</li>
          </Link>
          <Link to="/Cities">
          <li>Cities</li>
          </Link>
          <Link to="/Osaka">
          <li>Osaka</li>
          </Link>
          <Link to="/Yokohama">
          <li>Yokohama</li>
          </Link>
          <Link to="/SubmitImage">
          <li>Submit an Image</li>
          </Link>
        </ul>  
      </HOMEHeader>
      <main>
        <Route path ="/" exact render = {props => <Home  {...props}/>}/>
        <Route path ="/Yokohama" exact render = {props => <Yokohama  {...props}/>}/>
        <Route path ="/Yokohama/:id" exact render = {props => <Yokohama  {...props}/>}/>
        <Route path ="/SubmitImage" exact render = {props => <SubmitImage {...props}/>}/>
        <Route path ="/Osaka/" exact render = {props => <Osaka {...props}/>}/>
        <Route path ="/Osaka/:id" exact render = {props => <Osaka {...props}/>}/>
      </main>
      <HOMEFooter/>
    </div>
     )
   }
  
}

export default App;
