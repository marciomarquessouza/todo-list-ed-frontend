import styled from 'styled-components';

export const LogoWelcomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px 40px;
	margin: 20px 10px;
`;

export const StartButtonContainer = styled.div`
	margin: 20px 10px;
`;

export const WelcomeH1 = styled.h1`
	color: ${(props) => props.theme.colors.black};
	font-family: ${(props) => props.theme.fonts.title};
	font-weight: 400;
	text-align: center;
`;
