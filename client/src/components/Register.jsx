import React, { Component } from 'react';
import styled from 'styled-components';
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
    /* background-color:  */
`;

const FormTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;

const InputContainer = styled.div`
    width: 100%;
    height: 5rem;
    /* border: 1px solid black; */
    display: flex;    
    align-items: center;
    justify-content: center;
    /* padding-left: 4rem; */
`;

const Input = styled.input`
    /* margin: 0 auto; */
    /* margin-left: 4rem; */
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
    cursor: pointer;
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
        
        //redirect to
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
                <FormTitle>Register</FormTitle>
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
                    <InputContainer>
                        {/* <LabelSelect htmlFor="type">type of user</LabelSelect> */}
                        <Select name="type" id="type">
                            <option value="" defaultValue>choose type of user</option>
                            <option value="trainer">trainer</option>
                            <option value="trainee">trainee</option>
                        </Select>
                    </InputContainer>
  
                    {/* <button type="submit" onClick={this.handleSubmit}>Register</button> */}
                    <InputContainer>
                        <Submit type="submit" value="Register"/>
                    </InputContainer>
                </Form>
            </Container>
        );
    }

}

export default (Register);