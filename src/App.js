import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation.jsx'
import Table from './components/Table'
import Round from './components/Round'
import About from './components/About'
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  
`


function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/bingo2020/" component={Table} exact/>
          <Route path="/bingo2020/about" component={About} />
          <Route path="/bingo2020/round1" component={Round}/>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
