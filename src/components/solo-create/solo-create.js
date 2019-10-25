import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import './solo-create.css'

const backendURL = "https://great-beyond-photos.herokuapp.com/amateur"


const StyledEditArticle = styled.article`
    background:linear-gradient(to bottom, rgba(0,0,0,.85), rgba(136,136,136,0.55));
    border: 7px solid rgba(253, 255, 122, 1);
    border-radius:25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px auto;
    max-width: 700px;
    padding: 40px;
    margin-top:-20px;
`
const StyledHeader = styled.header`
color: white;
align-content: center;
display: flex;
font-size: 30px;
justify-content:space-between;
margin-bottom:25px;
text-align:center;
`
 

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    `

const StyledInput = styled.input`
width: 60%;
border: 2px solid black;
margin: 10px;
`

const StyledSubmitClick = styled.div`
    background:linear-gradient(to top, rgba(0,0,0,1), rgba(136,136,136,1));
    border: 4px solid rgba(136,136,136,0.55);
    color: white;
    font-weight: bolder;
    margin: 10px;
    padding: 3px;
    width: 100px;
    text-align: center;
    &:hover{
        transform:scale(1.1);
        z-index:1;
        box-shadow: 5px 5px 5px 5px rgba(208, 66, 255, 0.4);}
`    
class AmateurCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: '',
            id: '',
            largeImageURL: ''
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.submitImage = this.submitImage.bind(this)
    }

    handleValueChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    submitImage() {
        fetch(backendURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Controll": "no-cache",
                "Aceept": "*/*",
                "Host": "https://great-beyond-photos.herokuapp.com/amateur"
            },
            body: JSON.stringify(this.state)
        }).then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="Container">
                <StyledEditArticle>
                    <StyledHeader>
                        Add a New Photo
                    </StyledHeader>
                    <StyledForm>
                        <StyledInput 
                        id="id"
                        type="text"
                        value={this.state.id}
                        placeholder="Id"
                        onChange={this.handleValueChange}
                        />
                    </StyledForm>
                    <StyledForm>
                        <StyledInput 
                        tags="tags"
                        type="text"
                        value={this.state.tags}
                        placeholder="Tags"
                        onChange={this.handleValueChange}
                        />
                    </StyledForm>
                    <StyledForm>
                        <StyledInput 
                        url="url"
                        type="text"
                        value={this.state.url}
                        placeholder="url"
                        onChange={this.handleValueChange}
                        />
                    </StyledForm>
                    <StyledForm>
                        />
                        <Link to={'/solo'}>
                            <StyledSubmitClick onClick={this.submitImage}>
                                Submit Image
                            </StyledSubmitClick>
                        </Link>
                    </StyledForm>
                </StyledEditArticle>
                </div>
                </div>
        )
    }
}

export default AmateurCreate