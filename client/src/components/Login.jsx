import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 500;
    overflow-wrap: break-word;

`;

const Form = styled.form`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #DC8B12;
    border-radius: 10px;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #4d4d4d;
    outline: none;
    width: 75%;
    height: 3rem;
    &::placeholder{
        letter-spacing: 0.1rem;
        padding-left: 0.5rem;
        color: #bec1c4;
    }
`;

const InputContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;    
    align-items: center;
    justify-content: center;
`;

const Submit = styled.input`
    width: 75%;
    height: 3rem;
    border: none;
    border-radius: 10px;
    letter-spacing: 1px;
    color: #FFF;
    background-color: #1371ab;
    cursor: pointer;

    &:hover {
        background-color: #22a2f2;
    }
`;

const SmallNote = styled.div`
    text-align: center;
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
                <Title>welcome to my-training-plan</Title>
                <Form onSubmit={this.handleSubmit}>
                    <InputContainer>
                        <Input type="email" name="email" placeholder="email" />
                    </InputContainer>
                    <InputContainer>
                        <Input type="password" name="password" placeholder="password" />
                    </InputContainer>
                    <InputContainer>
                        <Submit type="submit" value="Login"/>
                    </InputContainer>
                    <SmallNote>
                        Don't have an account?&nbsp;<Link to='/register'>Register</Link>
                    </SmallNote>
                </Form>

            </Container>
        );
    }

}

export default (Login);