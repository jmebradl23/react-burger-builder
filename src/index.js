import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
// Hooking up redux to this react app
import { Provider } from 'react-redux';
//Adding ability to create redux store:
// Adding ability to combine all reducers into one by adding combineReducers:
import { createStore, combineReducers } from 'redux';
// importing reducers:
import reducer from './store/reducer';

// Creating a store in the index.js file just before (or when) our application starts. Adding the reducer from above.
const store = createStore(reducer);

/*Wrapping App and BrowserRouter with Provider to include Redux. Adding store property to connect our store to React*/
/*Wrapping everything with BrowserRouter to give App routing ability*/
const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

// Since routing is now available in <App>, we then use the app variable as an argument
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
