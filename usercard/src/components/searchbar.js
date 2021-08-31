import React, { useState } from 'react';
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

const initialFormValue = '';

const SearchBar = props => {
    const [form, setForm] = useState(initialFormValue)

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit();
        setForm(initialFormValue);
    }

    const onChange = (e) => {
       props.handleChange(e)
       setForm( e.target.value);
    }

    return(
        <StyledForm onSubmit={onSubmit}>
            <input type='text' size='20' onChange={onChange} value={form}/>
            <button>Search</button>
        </StyledForm>
    )
}

export default SearchBar;