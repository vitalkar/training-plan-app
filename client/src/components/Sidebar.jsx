import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Container = styled.div`
    height: 100%;
    width: 20rem;
    background: #d4d4d4;
`;

const Avatar = styled.div`
    height: 15rem;
    width: 100%;
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 2rem;
`;

const StyledLink = styled(Link)`
    padding: 1rem;
    width: 100%;
    text-decoration: none;
    color: #1371ab;
    border-bottom: 1px solid #1371ab;
    &:visited {
        color: #1371ab;
    }
    &:hover {
        color: #22a2f2;
        border-bottom-color: #22a2f2;
    }
`;

class Sidebar extends Component {
    
    render() {

        
        return (
            <Container>
                <Avatar>
                    <img src="" alt="avatar"/>
                </Avatar>
                <Navigation>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/account'>My Account</StyledLink>
                    <StyledLink to='/trainees'>Trainees</StyledLink>
                    <StyledLink to='/plan-templates'>plan templates</StyledLink>
                    <StyledLink to='/logout'>Logout</StyledLink>
                </Navigation>
            </Container>
        );
    }
        
}

const mapStateToProps = (state) => ({
    isSigned: state.user.isSigned,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);