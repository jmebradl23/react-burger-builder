import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        {// Including BurgerBuilder wrapped in the Layout component}
        }
        <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
