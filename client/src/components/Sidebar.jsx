import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Container = styled.div`
    height: 100%;
    width: 300px;
    background: #d4d4d4;
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 2rem;
    padding: 1rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

class Sidebar extends Component {
    
    render() {
        return (
            <Container>
                <Navigation>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/register'>Register</StyledLink>
                    <StyledLink to='/login'>Login</StyledLink>
                    <StyledLink to='/control'>Control</StyledLink>
                </Navigation>
            </Container>
        );
    }
        
}

export default (Sidebar);