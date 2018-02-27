// Outsourcing nav items to add a lot of styling
import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.css';

// for props.active we first determine if there is an active class. If there is, we add it, if not we simply return null.
const navigationItem = (props) => (
	<li className={classes.NavigationItem}>
		<NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>{props.children}</NavLink>
	</li>
);

export default navigationItem;