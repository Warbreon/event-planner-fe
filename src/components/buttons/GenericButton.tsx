import { Button, ButtonProps } from '@mui/material';
import React from 'react'
interface Props {
    title: string;
    onClick?: () => void;
    className?: string;
    buttonProps?: ButtonProps; 
};
const GenericButton: React.FC<Props> = ({ title, onClick, className, buttonProps }) => {
    return (
        <Button
            {...buttonProps}
            className={className}
            onClick={onClick}
        >
            {title}
        </Button>
    );
};
export default GenericButton;