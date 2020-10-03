import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Homepage from './components/Pages/homepage/Homepage.component';
import Stories from './components/Pages/Stories.component';
import Features from './components/Pages/Features.component';
import Pricing from './components/Pages/Pricing.component';
import Navbar from './components/Navbar/Navbar.component';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/stories" component={Stories} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
