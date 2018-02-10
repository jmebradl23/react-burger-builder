import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

// using simple ternary condition to change style of modal for show/hide
class Modal extends Component {
	// Adding shouldComponentUpdate check:
	shouldComponentUpdate(nextProps, nextState) {
		// using the .show method to determine if component should update
		// updating this so that the spinner will show if we make a post request (using children)
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
	}
	componentWillUpdate () {
		console.log('Will Update triggered in Modal');
	}
	render () {
		return (
			<Aux>
				<Backdrop show={this.props.show} closeModal={this.props.close}/>
				<div className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)':'translateY(-100vh)', 
						opacity: this.props.show ?'1':'0'}}>
					{this.props.children}
				</div>
			</Aux>

		)
	}
};

export default Modal;