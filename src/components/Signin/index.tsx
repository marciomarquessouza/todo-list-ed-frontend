import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import {
	Container,
	PanelSections,
	SignInTitle,
	InputContainer,
	SubmitContainer,
	SignInForm,
	SignUpLinkContainer,
	WelcomeLogoContainer,
} from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import { LinkButton } from '../LinkButton';
import { SIGN_UP } from '../../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actionsCreator/signInActionsCreator';
import { alertShow } from '../../store/actions/actionsCreator/alertActionsCreator';
import { AppState } from '../../store/reducers/rootReducer';
import { WelcomeList } from '../../assets/svg/WelcomeList';

export const SignIn = () => {
	const { t } = useTranslation();
	const [state, setState] = useState({ email: '', password: '' });
	const { push } = useHistory();
	const dispatch = useDispatch();
	const { isLoading } = useSelector((appState: AppState) => appState.signIn);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setState({ ...state, [name]: value });
	};

	const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, password } = state;
		if (!email || !password) {
			dispatch(alertShow('fillInAllFields', 'error'));
			return;
		}

		dispatch(actions.signInRequest(email, password));
	};

	return (
		<Container>
			<WelcomeLogoContainer>
				<PanelSections flex={1.2}>
					<WelcomeList />
				</PanelSections>
			</WelcomeLogoContainer>
			<PanelSections flex={0.8}>
				<SignInForm onSubmit={onSubmit}>
					<SignInTitle>{t('welcome')}</SignInTitle>
					<InputContainer>
						<Input
							type="email"
							placeholder={t('email')}
							name="email"
							autoComplete="on"
							value={state.email}
							onChange={onChange}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							type="password"
							placeholder={t('password')}
							name="password"
							autoComplete="on"
							value={state.password}
							onChange={onChange}
						/>
					</InputContainer>
					<SubmitContainer>
						<Button variant="rounded" type="submit" loading={isLoading}>
							{t('login')}
						</Button>
					</SubmitContainer>
					<SignUpLinkContainer>
						<LinkButton onClick={() => push(SIGN_UP)}>
							{t('signUpLink')}
						</LinkButton>
					</SignUpLinkContainer>
				</SignInForm>
			</PanelSections>
		</Container>
	);
};
