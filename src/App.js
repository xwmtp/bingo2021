import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation.jsx'
import Standings from './components/Standings'
import Round from './components/Round'
import Stats from './components/Stats'
import About from './components/About'
import Schedule from './components/Schedule'
import Bracket from './components/Bracket'
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

class App extends React.Component {

  render() {
    
    let url = window.location.href
    if (url.endsWith('bingo2020')) {
      url = url + '/'
      window.location.replace(url)
    }

    return (
      <HashRouter basename='/'>
        <Wrapper id='page'>
          <Header />
          <Navigation />
          <Switch>
            <Route path="/" component={Standings} exact />
            <Route path="/about" component={About} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/round/:i" component={Round} />
            <Route path="/stats"   component={Stats} />
            <Route path="/bracket" component={Bracket} />
          </Switch>
        </Wrapper>
      </HashRouter>
    )
  };
}

export default App;
