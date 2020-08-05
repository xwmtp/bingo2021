import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation.jsx'
import Table from './components/Table'
import Round from './components/Round'
import About from './components/About'
import Schedule from './components/Schedule'
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;



  
`


function App() {

  return (
<HashRouter basename='/'>
      <Wrapper id='page'>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" component={Table} exact/>
          <Route path="/about" component={About} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/round/:i" component={Round} />      
        </Switch>
      </Wrapper>
    </HashRouter>
  );
}

export default App;
