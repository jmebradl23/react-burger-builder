import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>Enjoy your burger!</h1>
			<div style={{width: '100%', margin: 'auto'}}></div>
			<Burger ingredients={props.ingredients}/>
			<Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
			<Button btnType="Success" clicked={props.checkoutOrder}>PLACE ORDER</Button>
		</div>
	)
}

export default checkoutSummary;