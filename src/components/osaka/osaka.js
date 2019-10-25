import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import './osaka.css'


const PhotoContainer = styled.section`
    border-top: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
`
const Photo = styled.img`

    border: 1px white solid;
    height:300px;
    width: 300px;
    margin: 12px;

    &:hover{
        transform:scale(1.1);
        z-index:1;
        box-shadow: 7px 7px 5px rgba(208, 66, 255, 0.4);
    }
`

class Osaka extends Component{
    constructor(props){
        super(props)
        this.state = ({
            photos: []
        })
    }
componentDidMount() {
    fetch("https://chriso-project4.herokuapp.com/osaka").then(res=>res.json())
        .then(res => {
            console.log(res)
            this.setState({photos:res})
    })
}

    render(){
        const photosView = this.state.photos.map((photo, i) => (
            <Link to={`/Osaka/${photo.ID}`} key={i}>
                <Photo
                    src={photo.url}
                    alt={photo.title}
                />
            </Link>
        ))
        return( 
        <div className="agAll">
            <PhotoContainer>
                {photosView}
            </PhotoContainer>
        </div>)
    }
}

export default Osaka