import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostListContainer from '../containers/PostListContainer';
import HeaderContainer from '../containers/HeaderContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <HeaderContainer/>
        <Route exact path="/" component={PostListContainer}/>
      </div>
    </Router>
  );
}

export default App;
