import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './Logo.css';

{/*Overwriting height as a prop: {{height: props.height}}*/}
const logo = (props) => (
	<div className={classes.Logo} style={{height: props.height}}>
		<img src={burgerLogo} alt="MyBurger"/>
	</div>
)

export default logo;