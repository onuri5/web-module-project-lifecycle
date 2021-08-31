import styled from 'styled-components';
import React from 'react';

const StyledCard = styled.div `  

    color: white;

    .card {
        max-width: 60%;
        background-color: #2b2d2f;
        height: 40vh;
        margin: 80px auto;
        border-radius: 50px;
    }

    span {
        display: inline-block;
        margin: 100px 30px;
    }
`

const Positioner = styled.div ` 
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Card = (props) => {

    console.log(props)

    return(
        <StyledCard>
            <div className="card">
            <Positioner>
                <img width='75' src={props.person.avatar_url} alt='GitHub avatar'/>
                <div>
                    <h1>Name:  {props.person.name === null ? <i>John Doe</i> : <i>{props.person.name}</i>}</h1>
                    <h2>Username:  <i>{props.person.login}</i></h2>
                </div>
            </Positioner>
            <span>Followers: {props.person.followers}</span>
            <span>Following: {props.person.following}</span>
            </div>
        </StyledCard>
    )
}

export default Card;