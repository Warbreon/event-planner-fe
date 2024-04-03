import React from 'react'
import { FormControl, FormControlProps, InputLabel, InputLabelProps, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material';

type Props = {
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
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    );
};

export default Dropdown;