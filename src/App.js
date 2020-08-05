import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation.jsx'
import Table from './components/Table'
import About from './components/About'
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  
`


function App() {
  return (
    <HashRouter basename='/'>
      <Wrapper>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" component={Table} exact/>
          <Route path="/about" component={About} />
        </Switch>
      </Wrapper>
    </HashRouter>
  );
}

export default App;
