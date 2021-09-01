import React from 'react';
import styled from 'styled-components';
import SearchBar from './searchbar';
import Card from './card';
import SocialCard from './follower';

const StyledContainer = styled.div `
    width: 60%;
    min-height: 100vh;
    border-radius: 20px;
    background: #F2F2F2;
    text-align: center;
    color: #2b2d2f;
    
    img {
        border-radius: 300px;
        border: solid #D3D3D3 1px;
    }

    .test {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .bottom-border {
        border-bottom: dashed black 1px;
    }
`

const CardContainer = props => {
    
    return (
    <StyledContainer>
        <h1>GitHub Searcher</h1>
        <SearchBar handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
        <Card person={props.user.data}/>
        <h1>Following</h1>
        <div className='bottom-border'>
            <div className='test'>{
                props.followingArr.map((person, index) => {
                    return <SocialCard person={person} key={index}/>
                })
            }</div>
        </div>

        <h1>Followers</h1>
        <div className='bottom-border'>
            <div className='test'>{
                props.followersArr.map((person, index) => {
                    return <SocialCard person={person} key={index}/>
                })
            }</div>
        </div>
        
    </StyledContainer>
    )
}

export default CardContainer;