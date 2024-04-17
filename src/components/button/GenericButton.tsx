import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface Props {
	text: string;
	onClick: () => void;
	className?: string;
	buttonProps?: ButtonProps;
}

const GenericButton: React.FC<Props> = ({ text, onClick, className, buttonProps }) => {
	return (
		<Button {...buttonProps} className={className} onClick={onClick}>
			{text}
		</Button>
	);
};

export default GenericButton;
