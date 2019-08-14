import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Sidebar from './Sidebar';
import ControlPanel from './ControlPanel';
import { Route, Switch, Link } from 'react-router-dom'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  height: 95%;
  width: 100%;
`;

const Footer = styled.div`
  height: 5rem;
  width: 100%;
  background-color: #DC8B12;
`;

class App extends Component {
  
  
  
  render() {  
    const { isLogged } = this.props;

    let display = null;
        
    if (isLogged) {
      display = (<Home />);
    } else {
      // display = (<Login />);
      // <>
    }

    return (
      <Container>
        <Main>
          <Switch>
            <Route exact path='/' render={() => (isLogged) ? <Home /> : <Login />} />
            <Route path='/register' component={Register} />
            {/* {display} */}
          </Switch>
        </Main>
        <Footer>created by vitka &copy;</Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
})

export default connect(mapStateToProps, null)(App);
