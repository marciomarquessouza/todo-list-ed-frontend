import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Header, SignIn, SignUp, Welcome } from '../../components';
import { Container } from './styles';
import { SIGN_IN, SIGN_UP, ONBOARDING } from '../../navigation/routes';

export const Onboarding = () => {
	const { push } = useHistory();

	return (
		<>
			<Header onLoginClick={() => push(SIGN_UP)} />
			<Container>
				<Switch>
					<Route exact path={ONBOARDING}>
						<Welcome onPress={() => push(SIGN_IN)} />
					</Route>
					<Route path={SIGN_IN}>
						<SignIn />
					</Route>
					<Route path={SIGN_UP}>
						<SignUp />
					</Route>
				</Switch>
			</Container>
		</>
	);
};
