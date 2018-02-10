//Adding a spinner for when we post to the server

import React from 'react';
import classes from './Spinner.css';

const spinner = () => (
	<div className={classes.Loader}>Loading...</div>
)

export default spinner;