import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 20px 40px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const LogoContainer = styled.div`
	display: inline-block;
`;

export const LogoTitleContainer = styled.span`
	@media (max-width: 240px) {
		display: none;
	}
`;
