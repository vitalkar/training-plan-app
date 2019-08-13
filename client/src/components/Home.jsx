import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`

`;

class Home extends Component {


    componentDidMount() {
        // console.log(this.props)
        // axios.get('http://localhost:3001/api/users', {params: {id: 1}})
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
    }

    render() {
        return (
            <Container>
                <h1>
                    welcome to my training plan
                </h1>
            </Container>
        );
    }

}

export default (Home);