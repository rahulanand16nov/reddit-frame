import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import PostListContainer from '../containers/PostListContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header subreddit="all" />
        <Route exact path="/" component={PostListContainer}/>
      </div>
    </Router>
  );
}

export default App;
