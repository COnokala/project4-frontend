import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import './UpdateImage.css'
const backendURL = "https://great-beyond-photos.herokuapp.com/amateur/"

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
    margin-top:130px;
`

const StyledHeader = styled.h1`
    color: white;
    background: black;
    align-items: center;
    display: flex;
    font-size: 30px;
    justify-content: space-between;
    text-align: center;
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

const StyledUpdateClick = styled.div`
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

export default class updateImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      author: '',
      description: ''
    }
    this.handleValueChange = this.handleValueChange.bind(this)
    this.updateImage = this.updateImage.bind(this)
  }

  componentDidMount() {
    fetch(backendURL + this.props.match.params.title)
      .then(response => response.json()
        .then((parsedJson) => {
          this.setState({
            ...parsedJson
          })
        }))
  }

  handleValueChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  updateImage() {
    fetch(backendURL + this.props.match.params.title, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Host": "https://chriso-project4.herokuapp.com/solo",
        "Connection": "keep-alive"
      },
      body: JSON.stringify(this.state)
    }).then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <StyledEditArticle>
          <StyledForm>
            <StyledHeader>Update Image</StyledHeader>
            <StyledInput
              id="id"
              type="text"
              placeholder="Web Address"
              value={this.state.url}
              onChange={this.handleValueChange}
            />
            <StyledInput
              name="author"
              type="text"
              placeholder="Author Name"
              value={this.state.author}
              onChange={this.handleValueChange}
            />
            <StyledInput
              name="description"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleValueChange}
            />
            <Link to={`/solo/${this.state.title}`}>
              <StyledUpdateClick onClick={this.updateImage}>
                Submit
            </StyledUpdateClick>
            </Link>
          </StyledForm>
        </StyledEditArticle>
      </div>
    )
  }
}
