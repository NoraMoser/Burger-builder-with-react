import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      //layout is the nav bar and burger builder is all the content being created.
      //exact prevents / from becomming a prefix and therefore appearing with every route.
      <div>
        <Layout>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
