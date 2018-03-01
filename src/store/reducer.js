import * as actionTypes from './actions';

// Creating a global var to keep track of additional ingredient prices
const INGREDIENT_PRICES = {
	lettuce: 0.5,
	cheese: 0.5,
	meat: 1.75,
	bacon: 1.25,
	onion: 0.75
};

// defining initial state
const initialState = {
	ingredients: {
		lettuce: 0,
		onion: 0,
		cheese: 0,
		bacon: 0,
		meat: 0
	},
	// Var to hold price of burger
	totalPrice: 4
};

//REDUCER// (with initialState)
const reducer = (state=initialState, action) => {
	// We include the types for each dispatched action and what to do for each one.
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
        	{/*Making a clone of state*/}
        	{/*Making a clone of ingredients since making a clone of the parent object doesn't make a clone of the child objects*/}
        	{/*Updating an ingredient in the new copied state*/}
        	{/*Returning new totalPrices*/}
            return {
            	...state,
            	ingredients: {
            		...state.ingredients,
            	[action.ingredientName]: state.ingredients[action.ingredientName] +1
            	},
            	totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
            	...state,
            	ingredients: {
            		...state.ingredients,
            	[action.ingredientName]: state.ingredients[action.ingredientName] -1
            	},
            	totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
        	return state;
    }
};

export default reducer;