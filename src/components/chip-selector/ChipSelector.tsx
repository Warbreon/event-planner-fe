import { Chip, ChipProps, Stack } from '@mui/material';
import React from 'react'

type Props = {
    options: Array<{
        id: number;
        name: string;
        count?: number;
    }>;
    selectedKeys: number | number[];
    onSelect: (key: number) => void;
    getChipClassName?: (isSelected: boolean) => string;
    chipProps?: ChipProps;
    multiple: boolean;
};

const ChipSelector: React.FC<Props> = ({ options, selectedKeys, onSelect, getChipClassName, chipProps, multiple }) => {

    const isSelected = (key: number): boolean => multiple && Array.isArray(selectedKeys) ? selectedKeys.includes(key) : selectedKeys === key;
    
    return (
        <Stack direction="row" spacing={1}>
            {options.map(option => (
                <Chip
                    {...chipProps}
                    key={option.id}
                    label={option.count ? `${option.name} (${option.count})` : option.name}
                    onClick={() => onSelect(option.id)}
                    className={getChipClassName && getChipClassName(isSelected(option.id))}
                />
            ))}
        </Stack>
    );
};

export default ChipSelector