//Creating a stateless function component and adding prop-types check for the ingredient

import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css'

// Creating a ES6 function with brackets so we can add logic before returning the ingredient
const burgerIngredient = (props) => {
		let ingredient = null;

		switch (props.type) {
			case ('bread-bottom'):
				ingredient = <div className={classes.BreadBottom}></div>;
				break;
			case ('bread-top'):
				ingredient = (
					<div className={classes.BreadTop}>
						<div className={classes.Seeds1}></div>
						<div className={classes.Seeds2}></div>
					</div>
					);
				break;
			case ('meat'):
				ingredient = <div className={classes.Meat}></div>;
				break;
			case ('cheese'):
				ingredient = <div className={classes.Cheese}></div>;
				break;
			case ('lettuce'):
				ingredient = <div className={classes.Lettuce}></div>;
				break;
			case ('bacon'):
				ingredient = <div className={classes.Bacon}></div>;
				break;
			default:
				ingredient = null;
		};

		return ingredient;
}

// Creating an object in our BurgerIngredient module so we can check the type to validate that it is in face a string.
burgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default burgerIngredient;