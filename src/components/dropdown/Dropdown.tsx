import { FC } from 'react'
import { Chip, FormControl, FormControlProps, InputLabel, InputLabelProps, MenuItem, Select, SelectChangeEvent, SelectProps, Typography } from '@mui/material';
import styles from './Dropdown.module.css'

interface Props {
    label?: string;
    value: string | string[];
    options: Array<{ value: string | number, label: string }>;
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

const Dropdown: FC<Props> = ({
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
                displayEmpty
                renderValue={(selected) => {
                    if (multiple && Array.isArray(selected) && selected.length === 0) {
                        return <Typography variant='body1' className='multi-select-placeholder'>Select event tags</Typography>;
                    } else if (multiple && Array.isArray(selected)) {
                        return (
                            <div className={styles.chipContainer}>
                                {selected.map((value) => (
                                    <Chip className='select-option' key={value} label={options.find(option => option.value === value)?.label || value} />
                                ))}
                            </div>
                        );
                    }
                    return options.find(option => option.value === value)?.label || value;
                }}
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