import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
// Adding Route for routing capabilities and Switch to limit routing to one path only.
import {Route, Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        {/*Including BurgerBuilder wrapped in the Layout component*/}
          {/*Instead of wrapping separate components inside our Layout, we set up routes using react-router-dom instead.
          <BurgerBuilder/>
          <Checkout />*/}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
















