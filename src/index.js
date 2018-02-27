import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

const app = (
	/*Wrapping everything with BrowserRouter to give App routing ability*/
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

// Since routing is now available in <App>, we then use the app variable as an argument
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
