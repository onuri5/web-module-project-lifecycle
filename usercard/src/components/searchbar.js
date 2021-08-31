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

const SearchBar = props => {

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit();
    }

    const onChange = (e) => {
       props.handleChange(e)
    }

    return(
        <StyledForm onSubmit={onSubmit}>
            <input type='text' size='20' onChange={onChange}/>
            <button>Search</button>
        </StyledForm>
    )
}

export default SearchBar;