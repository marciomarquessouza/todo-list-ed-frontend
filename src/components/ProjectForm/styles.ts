import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`;

export const InputSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0.8em;
	width: 100%;
`;

export const InputContainer = styled.div`
	margin: 0 10px;
	width: 90%;
`;

export const SubmitBtnContainer = styled.div`
	margin: 20px;
`;

export const ProjectFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 2em;
`;

export const ProjectTitle = styled.div`
	font-family: ${(props) => props.theme.fonts.title};
	font-size: 1.6em;
`;
