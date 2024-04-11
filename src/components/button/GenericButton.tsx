import { Button, ButtonProps, IconButton } from '@mui/material';
import React, { ReactNode } from 'react';

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
