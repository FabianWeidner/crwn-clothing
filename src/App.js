import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import './App.css';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
