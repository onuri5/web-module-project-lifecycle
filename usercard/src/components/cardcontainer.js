import React from 'react';
import styled from 'styled-components';
import SearchBar from './searchbar';
import Card from './card';

const StyledContainer = styled.div `
    width: 60%;
    height: 100vh;
    border-radius: 20px;
    background: #F2F2F2;
    text-align: center;
    color: #2b2d2f;

    img {
        border-radius: 300px;
        border: solid #D3D3D3 1px;
    }
`

const CardContainer = props => {

    console.log(props)
    
    return (
    <StyledContainer>
        <h1>GitHub Searcher</h1>
        <SearchBar handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
        <Card person={props.user.data}/>
    </StyledContainer>
    )
}

export default CardContainer;