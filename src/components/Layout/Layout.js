import React from 'react';

import Aux from '../../hoc/Aux';

import classes from './Layout.css'; 

// Creating a component that will hold the two branches of our app. This will allow us to use this layout component as a wrapper around the core components we want to render to the screen.
// div will hold the navigational components: Toolbar, SideDrawer and Backdrop
// main will hold the burger builder and will output the component we wrap with this layout
// Since we have adjacent JSX elements, we need to wrap it in a higher order component wrapper (Aux)
const layout = (props) => (
	<Aux>
		<div>Toolbar, SideDrawer, Backdrop</div>
		{
		// Adding a class (ass className) to the main component to use styling definded in Layout.css in the .Content class
		}
		<main className={classes.Content}>
			{props.children}
		</main>
	</Aux>
	);

export default layout;