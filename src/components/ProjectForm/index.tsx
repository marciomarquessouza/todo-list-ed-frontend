import React, { useState } from 'react';
import { IProjectForm } from './interface';
import { Input } from '../Input';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';
import {
	Container,
	InputSection,
	ProjectFormContainer,
	ProjectTitle,
	InputContainer,
	SubmitBtnContainer,
} from './styles';

export const ProjectForm = ({ onProjectSubmit, isLoading }: IProjectForm) => {
	const { t } = useTranslation();
	const [text, setText] = useState('');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setText(value);
	};

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		onProjectSubmit(text);
	};

	return (
		<Container>
			<ProjectFormContainer onSubmit={handleSubmit}>
				<ProjectTitle>{t('createProjectTitle')}</ProjectTitle>
				<InputSection>
					<InputContainer>
						<Input
							type="text"
							placeholder={t('createProjectPlaceholder')}
							name="project"
							autoComplete="on"
							value={text}
							onChange={onChange}
						/>
					</InputContainer>
					<SubmitBtnContainer>
						<Button variant="rounded" type="submit" loading={isLoading}>
							{t('createProjectBtnLabel')}
						</Button>
					</SubmitBtnContainer>
				</InputSection>
			</ProjectFormContainer>
		</Container>
	);
};
