import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
	// Since we passed an object as props.ingredients, we need to convert it to an array.
	// Object.keys extracts keys of an element and puts into an array....
	let transformedIngredients = Object.keys(props.ingredients)
	// ...we then use the .map method to pull out each condiment in the array...
	.map(condiment => {
		//...then, using each condiment, we create new (empty) arrays that have a length that's equal to one less of the condiments value in the original object ...
		return [...Array(props.ingredients[condiment] )]
		// ...and we use each new array to create a specific key as well as a type that will equal the type we check for in our switch method in our BurgerIngredient file for each react element we return.
		.map((_, i) => {
			return <BurgerIngredient key={condiment + i} type={condiment} />;
		});
	})
	// We then reduce the array and add each ingredient as an element to the array.
	.reduce((arr, el) => {
		return arr.concat(el)
	}, []);
	if (transformedIngredients.length===0) {
		transformedIngredients = <p>Please start adding ingredients</p>
	}
	return (
		// Adding classes from Burger.css file to style the burger
		<div className={classes.Burger}>
			{// Adding each ingredient to the burger as a string.
			//<div>Burger</div>
			}
			<BurgerIngredient type="bread-top" />
			{// Adding an array of react elements between the bun
			}
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;