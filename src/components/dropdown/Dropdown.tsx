import React from 'react'
import { Box, Chip, FormControl, FormControlProps, InputLabel, InputLabelProps, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material';

interface Props {
    label?: string;
    value: string | string[];
    options: Array<{ value: string, label: string }>;
    onChange: (event: SelectChangeEvent<any>) => void;
    formControlProps?: FormControlProps;
    inputLabelProps?: InputLabelProps;
    selectProps?: SelectProps<string | string[]>;
    formControlClassName?: string;
    inputLabelClassName?: string;
    selectClassName?: string;
    menuItemClassName?: string;
    multiple?: boolean;
};

const Dropdown: React.FC<Props> = ({
    label,
    value,
    options,
    onChange,
    formControlProps,
    inputLabelProps,
    selectProps,
    formControlClassName,
    inputLabelClassName,
    selectClassName,
    menuItemClassName,
    multiple,
}) => {
    return (
        <FormControl {...formControlProps} className={formControlClassName}>
            {label && (
                <InputLabel {...inputLabelProps} className={inputLabelClassName}>
                    {label}
                </InputLabel>
            )}
            <Select
                {...selectProps}
                value={value}
                onChange={onChange}
                className={selectClassName}
                multiple={multiple}
                renderValue={(selected) => multiple && Array.isArray(selected) ? (
                    <div>
                        {selected.map((value) => (
                            <Chip key={value} label={options.find(option => option.value === value)?.label || value} />
                        ))}
                    </div>
                ) : options.find(option => option.value === value)?.label || value}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} className={menuItemClassName}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    );
};

export default Dropdown;