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
    min-height: 100vh;
`

class Homepage extends React.Component {
    state = {
        data: {},
        userName: 'onuri5',
        followersArr: [],
        followingArr: []
    }

    handleChange = (e) => {
        this.setState({
            userName: e.target.value
        });
    }

    handleSubmit = () => {
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => {
              this.setState({
                ...this.state,
                data: res.data,
              });
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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data.login !== prevState.data.login) {
            // console.log('old state: ', prevState);
            // console.log('new state ', this.state)
            axios.get(this.state.data.followers_url) 
                .then(res => {
                    this.setState({
                        followersArr: res.data
                    })
                })
                .catch(err => {
                    console.error(err);
                })
            
            axios.get(`https://api.github.com/users/${this.state.userName}/following`) 
            .then(res => {
                this.setState({
                    followingArr: res.data
                })
            })
            .catch(err => {
                console.error(err);
            })
        }
    }

    render() {
        return(<StyledHomepage>
                <CardContainer 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    user={this.state} 
                    followersArr={this.state.followersArr} 
                    followingArr={this.state.followingArr}
                />
            </StyledHomepage>)
    }
}

export default Homepage;