import React from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import { Onboarding, Projects } from '../pages';
import { PrivateRoute } from './PrivateRoutes';
import { isAuthenticated } from '../services/sessionsServices';
import history from './history';
import { PROJECTS, ONBOARDING } from './routes';

export const Routes = () => (
	<Router history={history}>
		<Switch>
			<Route
				exact
				path="/"
				render={() =>
					isAuthenticated() ? (
						<Redirect to={PROJECTS} />
					) : (
						<Redirect to={ONBOARDING} />
					)
				}
			/>
			<Route path={ONBOARDING} component={Onboarding} />
			<PrivateRoute path={PROJECTS} component={Projects} />
			<Route path="*" render={() => <Redirect to="/" />} />
		</Switch>
	</Router>
);
