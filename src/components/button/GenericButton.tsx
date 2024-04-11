import { Button, ButtonProps, IconButton } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
	text: string;
	onClick: () => void;
	className?: string;
	buttonProps?: ButtonProps;
	icon?: ReactNode;
}

const GenericButton: React.FC<Props> = ({ text, onClick, className, buttonProps, icon }) => {
	return (
		<Button
			{...buttonProps}
			className={className}
			onClick={onClick}
			endIcon={icon ? <IconButton>{icon}</IconButton> : undefined}
		>
			{text}
		</Button>
	);
};

export default GenericButton;
