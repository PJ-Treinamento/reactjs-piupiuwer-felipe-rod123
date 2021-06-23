import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Feed from '../pages/Feed';


const Routes: React.FC = () => {
    return (
				<Switch>
	        <Route path="/login" component={Login} />
	
	        <Route path="/" component={Feed} isPrivate />
				</Switch>
    );
}

export default Routes;