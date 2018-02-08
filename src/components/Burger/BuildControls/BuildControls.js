// Creating controls so the user can manipulate the ingredients

import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

// Creating an array of build controls we can loop through.
const controls = [
	{label: 'Lettuce', type: 'lettuce'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'},
	{label: 'Onion', type: 'onion'}
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		{// Adding the total price to display above BuildControl
		}
		<p><strong>Current Price: ${props.price.toFixed(2)  }</strong></p>
		{// Looping through each one of the controls to build each one
		}
		{controls.map(ctrl => (
			/*Passing the props.ingredientAdded/Removed method calls from BurgerBuilder container. Creating as an ES6 function to pass ctrl.type as an argument
			Also getting the boolean from props.disabled with ctrl.type*/
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemoved(ctrl.type)} 
				disabled = {props.disabled[ctrl.type]}/>
		))}
		<button className={classes.OrderButton}
			disabled={!props.canOrder}
			onClick={props.reviewingOrder}>Order Now</button>
	</div>
);

export default buildControls;