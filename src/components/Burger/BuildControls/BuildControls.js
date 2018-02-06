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
	{label: 'Tomato', type: 'tomato'},
	{label: 'Onion', type: 'onion'}
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		{/*Looping through each one of the controls to build each one*/}
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
	</div>
);

export default buildControls;