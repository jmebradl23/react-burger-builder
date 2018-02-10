//Creating a separate file for build controls because it's a label and two buttons and is a reusable UI element.

import React from 'react';

import classes from './BuildControl.css';

// This is where we set up the buttons and label for each one of the ingredients and pass it back up the chain.
const buildControl = (props) => (
	//Passing the props.added for the ingredientAdded method call from BuildControls component as an onClick method
	// Adding disabled prop which will be set in BuildControls.js
	<div className={classes.BuildControl}>
		<button 
			className={classes.Less}
			onClick={props.removed} 
			disabled={props.disabled}>-1
		</button>
		<div className={classes.Label}>{props.label}</div>
		<button className={classes.More} onClick={props.added}>+1</button>
		
	</div>
);

export default buildControl;