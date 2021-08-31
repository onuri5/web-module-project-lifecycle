import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from './searchbar';

const StyledContainer = styled.div `
    width: 60%;
    height: 100vh;
    border-radius: 20px;
    background: #F2F2F2;
    text-align: center;
    color: #2b2d2f;
`

const CardContainer = props => {
    
    return (
    <StyledContainer>
        <h1>GitHub Searcher</h1>
        <SearchBar handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
    </StyledContainer>
    )
}

export default CardContainer;