import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CardContainer from './components/cardcontainer';

const StyledHomepage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2b2d2f;
    width: 100%auto;
    height: 100vh;
`

class Homepage extends React.Component {
    state = {
        data: [],
        userName: 'example'
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            userName: e.target.value
        });
    }

    handleSubmit = (e) => {
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => {
              this.setState({
                ...this.state,
                data: res.data
              });
              console.log(this.state)
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then((res) => {
                this.setState({
                    ...this.state,
                    data: res.data
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        return(<StyledHomepage>
            <CardContainer handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </StyledHomepage>)
    }
}

export default Homepage;