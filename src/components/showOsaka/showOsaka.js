import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import './ShowAmateur.css'

const photoInfoURL = "https://chriso-project4.herokuapp.com/osaka"

const StyledArticle = styled.article`
    background:linear-gradient(to bottom, rgba(0,0,0,.85), rgba(136,136,136,0.55));
    border: 7px solid rgba(253, 255, 122, 1);
    border-radius:25px;
    display: flex;
    justify-content: center;
    margin: 53px auto;
    max-width: 1300px;
    margin-top:40px;
    @media (max-width: 500px) {
    height: 400px;
  }
`

const StyledPhoto = styled.img`
    box-shadow: 10px 10px 5px #262952;
    max-height: 500px;
    margin: 10px;
    text-decoration: none;
    max-width: 800px;
    @media (max-width: 950px) {
    height: 275px;
    width:275px;
  }
  @media (max-width: 500px) {
    height: 200px;
    width:200px;
    margin-top:60px;
  }
`

const StyledInfoSection = styled.section`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    text-shadow: 5px 1px 4px #3359A5;
    text-align: center;
    padding-right:10px;
    padding-left:10px;
`

const StyledInfoField = styled.span`
    color: rgba(253, 255, 122, 1);
    font-weight: bolder;
    @media (max-width: 950px) {
    font-size:16px;
  }
  @media (max-width: 500px) {
    font-size:12px;
  }
`

const StyledChangeKeys = styled.section`
    background:linear-gradient(to top, rgba(0,0,0,1), rgba(136,136,136,1));
    border: 4px solid rgba(136,136,136,0.55);
    color: white;
    font-weight: bolder;
    margin: 10px;
    padding: 3px;
    width: 250px;
    text-align: center;
    @media (max-width: 950px) {
    width: 150px;
    font-size:14px;
  }
  @media (max-width: 500px) {
    width:100px;
    font-size:12px;
  }
    &:hover{
        transform:scale(1.1);
        z-index:1;
        box-shadow: 5px 5px 5px 5px rgba(208, 66, 255, 0.4);}
`

export default class ShowPhoto extends Component {
    constructor(props){
        super(props)
        this.state = {
          photoInfo: {}
        }
        
        this.fetchPhotoInfo = this.fetchPhotoInfo.bind(this)
        this.deletePhoto = this.deletePhoto.bind(this)
    }

    componentDidMount() {
        this.fetchPhotoInfo()
    }

    fetchPhotoInfo() {
        fetch(photoInfoURL + this.props.match.params.title)
          .then( response => response.json()
          .then( (parsedJson) => {
            this.setState({
                photoInfo: parsedJson
            })
        }))
    }

    deletePhoto() {
        fetch(photoInfoURL + this.props.match.params.title, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
            },
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    };

    render() {
        const photoInfo = this.state.photoInfo;
        return (
            <div className="container">
            <StyledArticle>
                    <StyledPhoto src={photoInfo.url} alt={photoInfo.title}/>
                    <StyledInfoSection>
                        <section>
                            <p><StyledInfoField>{"Title: "}</StyledInfoField>{photoInfo.title}</p>
                            <p><StyledInfoField>{"Author: "}</StyledInfoField>{photoInfo.author}</p>
                            <p><StyledInfoField>{"Description: "}</StyledInfoField>{photoInfo.description}</p>
                        </section>
                        <Link 
                            to={"/Amateur/"+photoInfo.title+"/Edit/"}
                            >
                            <StyledChangeKeys>Edit Photo</StyledChangeKeys>
                        </Link>
                        <Link to="/">
                            <StyledChangeKeys onClick={this.deletePhoto}>Delete Photo</StyledChangeKeys>
                        </Link>
                    </StyledInfoSection>
            </StyledArticle>
            </div>
        )
    }
}

