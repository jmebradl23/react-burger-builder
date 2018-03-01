// Adding a Checkout container because it will be managing it's own state and passing it down to other components. Since we're managing state it will be a class component.

import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {
	// No longer need this state while using Redux:
	// state = {
	// 	ingredients: null,
	// 	price: 0
	// }

	//No longer need to use query params with Redux:
	// componentWillMount() {
	// 	// Adding query ingredients to this component's state
	// 	const query = new URLSearchParams(this.props.location.search);
	// 	const ingredients = {};
	// 	let price = 0;
	// 	for (let param of query.entries()) {
	// 		if (param[0]==='price') {
	// 			price = param[1];
	// 		} else {
	// 			ingredients[param[0]] =+param[1];
	// 		}
	// 	}
	// 	this.setState({ingredients: ingredients, totalPrice: price});
	// }

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
					ingredients={this.props.ings}
					checkoutCancel={this.checkoutCancelHandler}
					checkoutOrder={this.checkoutOrderHandler}/>
				<Route 
					path={this.props.match.path + '/contact-data'} 
					component={ContactData} />
					{/*render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} {...props}/>)} />*/}
			</div>
		)
	}
}

// We're not dispatching anything to store so we only need mapStateToProps
const mapStateToProps = state => {
	return {
		ings: state.ingredients
	}
}

export default connect(mapStateToProps)(Checkout);










