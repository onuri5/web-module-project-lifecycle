import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form ` 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    input {
        font-size: 40px;
        margin-bottom: 10px;
    }

    button {
        font-size: 20px;
    }
`

class SearchBar extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <StyledForm onSubmit={this.onSubmit}>
                <input type='text' size='20'/>
                <button>Search</button>
            </StyledForm>
        )
    }
}

export default SearchBar;