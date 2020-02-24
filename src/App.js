import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Router>
      <Navigation />
      <Route exact path="/Home" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
    </Router>
  </div>
);

export default App;
