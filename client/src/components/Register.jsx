import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom'

import axios from 'axios';
import User from '../models/User';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const Title = styled.div`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
`;

const InputContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;    
    align-items: center;
    justify-content: center;
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

const LabelSelect = styled.label`
    display: flex;
    align-items: center;
    word-wrap: break-word;
    width: 4rem;
`;

const Select = styled.select`
    width: 75%;
    height: 3rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #4d4d4d;
    background: transparent;
`;

const Submit = styled.input`
    width: 75%;
    height: 3rem;
    border: none;
    border-radius: 10px;
    letter-spacing: 1px;
    color: #FFF;
    background-color: #22a2f2;
    cursor: pointer;

    &:hover {
        background-color: #1371ab;
    }
`;

const SmallNote = styled.div`
    text-align: center;
`;


class Register extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password } = this.state;
        // const newUser = new User(firstname,lastname,email,password);
        const newUser = { firstname,lastname,email,password };

        // axios.post('http://localhost:3001/api/register', newUser)
        axios.post('http://localhost:3001/api/users', newUser)
        .then((res) => {
            console.log(res)
            if (res.status === 200) {
                this.props.history.push('/');
            } else {
                console.log(`somthing wrong, response status ${res.status}`);
            }
        })
        .catch((err) => console.log(err));
        
    }

    handleInput = (e) => {
        // console.log(e.target.name);
        const { name, value } = e.target;
        switch (name) {
            case 'firstname':
                this.setState({ firstname: value });
                break;
            case 'lastname':
                this.setState({ lastname: value });                
                break;
            case 'email':
                this.setState({ email: value });
                break;
            case 'password':
                this.setState({ password: value });
                break;
            default:
                break;
        }
    }

    render() {
        
        return (
            <Container>
                <Title>create an account</Title>
                <Form onSubmit={this.handleSubmit}>
                    <InputContainer>
                        <Input type="text" name="firstname" id="" placeholder='first name' onChange={this.handleInput} />
                    </InputContainer>
                    <InputContainer>
                        <Input type="text" name="lastname" id="" placeholder='last name' onChange={this.handleInput} />
                    </InputContainer>
                    <InputContainer>
                        <Input type="email" name="email" id="" placeholder='email' onChange={this.handleInput} />
                    </InputContainer>
                    <InputContainer>
                        <Input type="" name="password" id="" placeholder='password' onChange={this.handleInput} />
                    </InputContainer>
                    {/* <small>*type of user</small> */}
                    {/* <InputContainer>
                        <Select name="type" id="type">
                            <option value="" defaultValue>choose type of user</option>
                            <option value="trainer">trainer</option>
                            <option value="trainee">trainee</option>
                        </Select>
                    </InputContainer> */}
  
                    {/* <button type="submit" onClick={this.handleSubmit}>Register</button> */}
                    <InputContainer>
                        <Submit type="submit" value="Register"/>
                    </InputContainer>
                    <SmallNote>
                        Already have an account?&nbsp;<Link to='/'>login</Link>
                    </SmallNote>
                </Form>
            </Container>
        );
    }

}

export default (Register);