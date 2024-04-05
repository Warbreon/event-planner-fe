import React from 'react'
import { FormControl, FormControlProps, InputLabel, InputLabelProps, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material';

interface Props {
    label?: string;
    value: string;
    options: Array<{ value: string, label: string }>;
    onChange: (event: SelectChangeEvent<string>) => void;
    formControlProps?: FormControlProps;
    inputLabelProps?: InputLabelProps;
    selectProps?: SelectProps<string>;
    formControlClassName?: string;
    inputLabelClassName?: string;
    selectClassName?: string;
    menuItemClassName?: string;
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