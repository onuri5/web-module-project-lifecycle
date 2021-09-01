import styled from 'styled-components';
import React from 'react';

const StyledCard = styled.div `  
    color: white;

    .card {
        width: 100%;
        background-color: #2b2d2f;
        height: 30vh;
        margin: 40px;
        border-radius: 50px;
    }

    span {
        display: inline-block;
        margin: 50px 30px;
    }

    a {
        color: white;
    }
    width: 40%;
`

const Positioner = styled.div ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SocialCard = (props) => {

    return(
            <StyledCard>
                <div className="card">
                <Positioner>
                    <img width='50' src={props.person.avatar_url} alt='GitHub avatar'/>
                    <div>
                        <h3>Username:  <i>{props.person.login}</i></h3>
                        <h3><a href={props.person.html_url} target='_blank' rel="noreferrer">GitHub</a></h3>
                    </div>
                </Positioner>
                </div>
            </StyledCard>
    )
}

export default SocialCard;