import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`

`;

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target['firstname'].value);
        const credentials = {
             firstname: e.target['firstname'].value,
             password: e.target['password'].value, 
        };
        axios.post('http://localhost:3001/api/login', credentials)
        .then((result) => console.log(result));
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="email" name="email"/> */}
                    <input type="text" name="firstname" placeholder="firstname" />
                    <input type="password" name="password" placeholder="password" />
                    <input type="submit" value="Login"/>
                </form>

            </Container>
        );
    }

}

export default (Login);