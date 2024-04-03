import { Chip, Stack } from '@mui/material';
import React from 'react'

type Props = {
    options: Array<{
        key: string;
        label: string;
        count?: number;
    }>;
    selectedKey: string | null;
    onSelect: (key: string) => void;
    chipClassName?: string;
};

const ChipSelector: React.FC<Props> = ({ options, selectedKey, onSelect, chipClassName }) => {
    return (
        <Stack direction="row" spacing={1}>
            {options.map((option) => (
                <Chip
                    key={option.key}
                    label={option.count ? `${option.label} (${option.count})` : option.label}
                    onClick={() => onSelect(option.key)}
                    className={chipClassName}
                />
            ))}
        </Stack>
    );
};

export default ChipSelector