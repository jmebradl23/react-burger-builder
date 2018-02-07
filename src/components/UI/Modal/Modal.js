import React from 'react';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

// using simple ternary condition to change style of modal for show/hide
const modal = (props) => (
	<Aux>
		<Backdrop close={props.closeModal} show={props.show}/>
		<div className={classes.Modal}
			style={{
				transform: props.show ? 'translateY(0)':'translateY(-100vh)', 
				opacity: props.show ?'1':'0'}}>
			{props.children}
		</div>
	</Aux>
)

export default modal;