import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Sidebar from './Sidebar';
import ControlPanel from './ControlPanel';

const AppContainer = styled.div`
  height: 100%;
  display: flex;
`;

const Main = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/control' component={ControlPanel} />
          </Switch>
        </Main>
      </AppContainer>
    </Router>
  );
}

export default App;
