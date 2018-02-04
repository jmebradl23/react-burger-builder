//This is a container beacause it is a stateful component, and therefore we will be manipulating the state.

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
	// implementing a lifestyle method to tell react what to render, and returning JSX of two adjacent components (hence we wrap it in a fragment): the burger, and the burger build controls
	render () {
		return (
			<Aux>
				<div>Burger</div>
				<div>Build Controls</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;
