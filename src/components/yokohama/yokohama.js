import React, { Component } from 'react';
import '../app/App'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './yokohama.css'

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
        box-shadow: 7px 7px 5px rgba(255, 151, 87, 0.52);
    }
`

class Mars extends Component{
    constructor(props){
        super(props)
        this.state={
            photos:[]
        }
    }
    componentDidMount() {
        fetch("https://chriso-project4.herokuapp.com/yokohama").then(res=>res.json())
        .then(res => {
            console.log(res)
            this.setState({photos:res})
    })}
    render(){
        const photosView = this.state.photos.map((photo, i) => (
            <Link to={`/yokohama/${photo.id}`} key={i}>
                <Photo
                    src={photo.img_src}
                    alt={photo.rover.name}
                />
            </Link>
        ))
        return( 
        <div className="mainDisplay">
            <PhotoContainer>
                {photosView}
            </PhotoContainer>
        </div>)
    }
}


export default yokohama