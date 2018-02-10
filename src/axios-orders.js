//Creating an instance of axios. 

import axios from 'axios';

//passing a JS object to configure
const instance = axios.create({
	baseURL: 'https://react-burger-builder-a77c9.firebaseio.com/'
});

export default instance;