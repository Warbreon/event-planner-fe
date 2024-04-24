import { Chip, ChipProps, Stack } from '@mui/material';
import React from 'react'
import { Tag } from '../../models/Tag';

type Props = {
    options: Tag[];
    selectedKeys: number[];
    onSelect: (key: number) => void;
    getChipClassName?: (isSelected: boolean) => string;
    chipProps?: ChipProps;
};

const ChipSelector: React.FC<Props> = ({ options, selectedKeys, onSelect, getChipClassName, chipProps }) => {
    return (
        <Stack direction="row" spacing={1}>
            {options.map(tag => (
                <Chip
                    {...chipProps}
                    key={tag.id}
                    label={tag.name}
                    onClick={() => onSelect(tag.id)}
                    className={getChipClassName && getChipClassName(selectedKeys.includes(tag.id))}
                />
            ))}
        </Stack>
    );
};

export default ChipSelector