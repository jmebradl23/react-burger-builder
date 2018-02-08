import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

/* To check when this component updates, it was changed into a class so that the componentWillUpdate() method can be used:
componentWillUpdate() {
	console.log('Will Update inside orderSummary');
} 
We can see that this updates whenever the hamburger is changed and not only when the modal is called*/

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(condiment => {
			return (
				<li key={condiment + props.ingredients[condiment]}>
					<span style={{textTransform: 'capitalize'}}>{condiment}</span>: {props.ingredients[condiment]}
				</li>
			)
		})
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: ${props.price}</strong></p>
			<p>Continue to checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
			<Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
		</Aux>
	)
}

export default orderSummary;