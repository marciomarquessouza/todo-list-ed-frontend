export interface IButtonProps {
	children: any;
	onClick?: () => void;
	variant: 'primary' | 'secondary' | 'rounded' | 'solid';
	type?: 'button' | 'submit' | 'reset';
	loading?: boolean;
}
