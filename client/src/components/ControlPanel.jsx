import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`

`;

class ControlPanel extends Component {

    state = {
        responseText: ''
    }

    // componentDidMount() {
        // console.log(this.props)
        // axios.get('http://localhost:3001/api/users', { params: { id: 1 } })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
    // }

    handleClick = (e) => {
        const { value } = e.target;
        console.log(value)
        switch (value) {
            case 'create':
                axios.post('http://localhost:3001/api/users', {dummy: 'dummy'})
                    .then((res) => this.setState({ responseText: res.data.text }))
                    .catch((err) => console.log(err));
                break;
            case 'read':
                axios.get('http://localhost:3001/api/users', { params: { id: 1 } })
                    .then((res) => this.setState({ responseText: res.data.text }))
                    .catch((err) => console.log(err));
                break;
            case 'delete':
                axios.delete('http://localhost:3001/api/users', { params: { id: 1 } })
                    .then((res) => this.setState({responseText: res.data.text}))
                    .catch((err) => console.log(err));
                break;
            case 'update':
                axios.put('http://localhost:3001/api/users', { params: { id: 1 } })
                    .then((res) => this.setState({ responseText: res.data.text }))
                    .catch((err) => console.log(err));
                break;
        
            default:
                break;
        }
    }

    render() {
        return (
            <Container>
                <h1>CRUD</h1>
                <input type="button" value="create" onClick={this.handleClick}/>
                <input type="button" value="read" onClick={this.handleClick}/>
                <input type="button" value="update" onClick={this.handleClick}/>
                <input type="button" value="delete" onClick={this.handleClick}/>
                <div>
                    <h2>
                        {this.state.responseText}
                    </h2>
                </div>
            </Container>
        );
    }

}

export default (ControlPanel);