//Adding a button component so we can reuse the same styling throughout the app

import React from 'react';

import classes from './Button.css';

// We are adding an array to be able to change which classes we add to each button (success, danger, etc)
const button = (props) => (
	<button disabled={props.disabled} className={[classes.Button,classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
);

export default button;
