import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<DrawerToggle clicked={props.drawerToggleClicked} />
		{/*Setting height as a prop */}
		<Logo height='80%'/>
		<nav className={classes.DesktopOnly }>
			<NavigationItems />
		</nav>
	</header>
)

export default toolbar;