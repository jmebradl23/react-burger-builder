// Moving Layout into hoc folder as it is a wrapper component

import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css'; 

// Creating a component that will hold the two branches of our app. This will allow us to use this layout component as a wrapper around the core components we want to render to the screen.
// div will hold the navigational components: Toolbar, SideDrawer and Backdrop
// main will hold the burger builder and will output the component we wrap with this layout
// Since we have adjacent JSX elements, we need to wrap it in a higher order component wrapper (Aux)
// Since we want the Toolbar on every page we load, we will put it on the Layout component.
class Layout extends Component {
	state = {
		showSideDrawer: false
	}
	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer};
		})
	}

	render () {
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer 
					open={this.state.showSideDrawer} 
					closed={this.sideDrawerClosedHandler} />
				{
				// Adding a class (as className) to the main component to use styling definded in Layout.css in the .Content class
				}
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;