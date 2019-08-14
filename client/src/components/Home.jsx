import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import axios from 'axios';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { Route, Switch, Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const Dashboard = styled.div`
    height: 100%;
    width: 100%;
`;

const TraineesContainer = styled.div`
    border: 1px solid black;
    height: 50%;
`;

const PlansContainer = styled.div`

`;

const Trainee = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    font-size: 2rem;
    cursor: pointer;
    padding: 0 1rem;
`;

class Home extends Component {

    componentDidMount() {
        // console.log(this.props)
        // axios.get('http://localhost:3001/api/users', {params: {id: 1}})
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
    }

    displayTrainee = (e) => {
        console.log('hi')
    }

    render() {

        const trainees = [
            {firstname: 'coco', lastname: 'loco', email: 'co@loco.com', image: ''},
            {firstname: 'coco', lastname: 'loco', email: 'co@loco.com', image: ''},
            {firstname: 'coco', lastname: 'loco', email: 'co@loco.com', image: ''},
            {firstname: 'coco', lastname: 'loco', email: 'co@loco.com', image: ''},
        ]
            .map((trainee, index) => (
            <Trainee key={index} onClick={this.displayTrainee}>
                <div>{trainee.firstname}&nbsp;{trainee.lastname}</div>
            </Trainee>));

        return (
            <Container>
                <Sidebar />
                <Dashboard>
                <SearchBar />
                <TraineesContainer>
                    {trainees}
                </TraineesContainer>
                {/* <PlansContainer></PlansContainer> */}
                </Dashboard>
            </Container>
        );
    }

}

const mapStateToProps = (state) => ({
    isSigned: state.user.isSigned,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);