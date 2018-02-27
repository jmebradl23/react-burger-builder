// Adding a Checkout container because it will be managing it's own state and passing it down to other components. Since we're managing state it will be a class component.

import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: null,
		price: 0

	}

	componentWillMount() {
		// Adding query ingredients to this component's state
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for (let param of query.entries()) {
			if (param[0]==='price') {
				price = param[1];
			} else {
				ingredients[param[0]] =+param[1];
			}
		}
		this.setState({ingredients: ingredients, totalPrice: price});
	}

	// Createing Checkout page button handlers
	checkoutCancelHandler = () => {
		this.props.history.goBack();
	}

	checkoutOrderHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render () {
		return (
			<div>
				{/*Adding functions to click events on checkout buttons*/}
				<CheckoutSummary 
					ingredients={this.state.ingredients}
					checkoutCancel={this.checkoutCancelHandler}
					checkoutOrder={this.checkoutOrderHandler}/>
				<Route 
					path={this.props.match.path + '/contact-data'} 
					render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)} />
				}
			</div>
		)
	}
}

export default Checkout;










