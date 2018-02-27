//This is a container beacause it is a stateful component, and therefore we will be manipulating the state.
import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
//Wrapping this component with the error handler
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

// Creating a global var to keep track of additional ingredient prices
const INGREDIENT_PRICES = {
	lettuce: 0.5,
	cheese: 0.5,
	meat: 1.75,
	bacon: 1.25,
	onion: 0.75
};

class BurgerBuilder extends Component {
	// Setting up state to hold all ingredients for a burger
	state = {
		ingredients: null,
		// Var to hold price of burger
		totalPrice: 4,
		canOrder : false,
		reviewOrder: false,
		loading: false,
		error: false
	}

	componentDidMount () {
		console.log(this.props);
		axios.get('https://react-burger-builder-a77c9.firebaseio.com/orders/ingredients.json')
			.then(response => {
				console.log(this.state.ingredients)
				this.setState({ingredients: response.data});
			})
			.catch( error => {
                this.setState( { error: true } );
            } );
	}

	updateCanOrderState (ingredients) {
		// taking ingredients into an array and running through the array to find amount of each ingredient, then returning sum of all elements
		const sum = Object.keys(ingredients)
			.map(condiment => {
				return ingredients[condiment];
			})
			.reduce((sum, el) => {
				return sum + el;
			},0);
		this.setState({canOrder: sum>0});
	}

	// Adding methods to remove and add ingredients which both will receive the type of ingredient:
	addIngredientHandler = (type) => {
		// finding the previous count of the ingredient by searching in state
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		
		// Arr to update state:
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;

		// Updating totalPrice
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice	= oldPrice + priceAddition;
		//Updating state:
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		// updating order state using the updatedIngredients value. Note: don't use this.state.ingredients to calculate value since it may not be updated by the time this method is called
		this.updateCanOrderState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		// Adding similar logic as above
		const oldCount = this.state.ingredients[type];
		if (oldCount <=0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice	= oldPrice - priceDeduction;
		//Updating state:
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		this.updateCanOrderState(updatedIngredients); 
	}

	reviewOrderHandler = () => {
		this.setState({reviewOrder:true});
	}

	orderReviewCancelHandler = () => {
		this.setState({reviewOrder:false});

	}

	purchaseContinueHandler = () => {
		// Using Firebase for post request.
		// this.setState({loading: true});
		// Getting our data from state
		// const data = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: 'James Bradley',
		// 		address: {
		// 			street: '123 Sesame Street',
		// 			zipCode: '12345',
		// 			country: 'United States'
		// 		},
		// 		email: 'test@test.com',
		// 	},
		// 	deliveryMethod: 'super fast'
		// }
		// Creating an end point, and passing our data with the post request
		// axios.post('/orders.json', data)
		// 	.then(response => {
		// 		this.setState({loading: false, reviewOrder: false});
		// 	})
		// 	.catch(error => {
		// 		this.setState({loading: false, reviewOrder: false});
		// 	});
		const queryParams = [];
		for (let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		})
	};


	// implementing a lifestyle method to tell react what to render , and returning JSX of two adjacent components (hence we wrap it in a fragment): the burger, and the burger build controls
	render () {
		// copying state.ingredients
		const disabledInfo = {
			...this.state.ingredients
		};
		// replacing all values with boolean instead of count
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <=0
		}
		let orderSummary = null;
		// creating a variable to change orderSummary depending on if there's a server delay in our post request

		let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
		
		if(this.state.ingredients) {
			// Adding in the BuildControls component to overwrite text
			// <div>Build Controls</div>
			/*Passing method handlers to BuildControls as a prop so it can be read down the chain.
			Also passing disabledInfo object down the chain to check if ingredients are <0
			Adding price as a prop to pass down the chain to BuildControls*/
			burger = (<Aux><Burger ingredients={this.state.ingredients} />
				<BuildControls 
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved ={this.removeIngredientHandler} 
					disabled ={disabledInfo}
					price={this.state.totalPrice}
					canOrder={this.state.canOrder}
					reviewingOrder={this.reviewOrderHandler}/></Aux>);
			orderSummary = <OrderSummary 
						purchaseCancel={this.orderReviewCancelHandler}
						purchaseContinue={this.purchaseContinueHandler}
						ingredients={this.state.ingredients}
						price={this.state.totalPrice.toFixed(2)}/>;
			if (this.state.loading) {
				orderSummary = <Spinner/>;
			}
		}

		return (
			<Aux>
				<Modal show={this.state.reviewOrder} closeModal={this.orderReviewCancelHandler}>
				{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

// wrapping this component with errorHandler
export default withErrorHandler(BurgerBuilder, axios);
