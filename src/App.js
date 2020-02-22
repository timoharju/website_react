import React from 'react';
import Header from './components/header3';
import Body from './components/body';
import Skills from './components/skills';
import Projects from './components/projects';
import Wexp from './components/wexp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './BootstrapOver.css';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <Body />
      <Projects />
      <Skills />
      <Wexp />
    </div>
  );
}

export default App;
