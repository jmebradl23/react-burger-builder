// Outsourcing nav items to add a lot of styling

import React from 'react';
import classes from './NavigationItem.css';

// for props.active we first determine if there is an active class. If there is, we add it, if not we simply return null.
const navigationItem = (props) => (
	<li className={classes.NavigationItem}>
		<a href={props.link} 
		className={props.active ? classes.active : null}>{props.children}</a>
	</li>
);

export default navigationItem;