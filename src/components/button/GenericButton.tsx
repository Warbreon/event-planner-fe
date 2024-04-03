import { Button } from '@mui/material';
import React from 'react'

type Props = {
    text: string;
    onClick: () => void;
    className?: string;
};

const GenericButton: React.FC<Props> = ({ text, onClick, className, ...props }) => {
    return (
        <Button
            {...props}
            className={className}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default GenericButton;