import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.background};
	padding: 20px;
`;

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const NameStyle = styled.span`
	padding: 10px;
	font-family: ${(props) => props.theme.fonts.title};
	font-weight: 400;
	font-size: 1.2em;
	color: ${(props) => props.theme.colors.black};
	word-wrap: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 180px;
`;
