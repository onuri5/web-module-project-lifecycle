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

class Card extends React.Component {
    
    render() {
        return (
        <StyledContainer>
            <h1>GitHub Searcher</h1>
            <SearchBar />
        </StyledContainer>
        )
    }
}

export default Card;