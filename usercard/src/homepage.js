import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './components/cardcontainer';

const StyledHomepage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2b2d2f;
    width: 100%auto;
    height: 100vh;
`

class Homepage extends React.Component {

    render() {
        return(<StyledHomepage>
            <Card />
        </StyledHomepage>)
    }
}

export default Homepage;