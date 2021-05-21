import './App.css';
import React from 'react'
import {AppContainer} from './components/elements'
import TopBar from './components/topbar'
import ClockMain from './components/clockmain'
import Nav from './components/nav'

function App() {
  return (
    <>
      <AppContainer className="desktop">
        <TopBar />
        <ClockMain />
        <Nav />
      </AppContainer>
    </>
  );
}

export default App;
