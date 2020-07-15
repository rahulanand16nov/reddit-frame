import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header subreddit="all" />
        <Route exact path="/" component={MainPage}/>
      </div>
    </Router>
  );
}

export default App;
