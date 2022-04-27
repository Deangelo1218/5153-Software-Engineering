import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/sigin';
import ProductPage from './pages/product';
import SearchPage from './pages/search';




function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/food/:id' component={ProductPage} exact/>
        <Route path='/search' component={SearchPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
