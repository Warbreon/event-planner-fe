import { Chip, ChipProps, Stack } from '@mui/material';
import React from 'react'

type Props = {
    options: Array<{
        key: string;
        label: string;
        count?: number;
    }>;
    selectedKey: string | null;
    onSelect: (key: string) => void;
    getChipClassName?: (isSelected: boolean) => string;
    chipProps?: ChipProps;
};

const ChipSelector: React.FC<Props> = ({ options, selectedKey, onSelect, getChipClassName, chipProps }) => {
    return (
        <Stack direction="row" spacing={1}>
            {options.map((option) => (
                <Chip
                    {...chipProps}
                    key={option.key}
                    label={option.count ? `${option.label} (${option.count})` : option.label}
                    onClick={() => onSelect(option.key)}
                    className={getChipClassName && getChipClassName(option.key === selectedKey)}
                />
            ))}
        </Stack>
    );
};

export default ChipSelector