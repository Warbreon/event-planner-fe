import { Autocomplete, AutocompleteProps, TextFieldProps } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { ChangeEvent, FC } from 'react';

interface Option {
    id: number;
    label: string;
}

interface Props extends AutocompleteProps<Option, false, boolean, false> {
    name: string;
    options: Array<Option>;
    textFieldProps?: TextFieldProps;
}

const FormikAutocomplete: FC<Props> = ({ name, options, textFieldProps, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);

    const selectedOption = options.find((option) => option.id === field.value) || null;

    const handleChange = (_: ChangeEvent<{}>, newValue: Option | null) => {
        setFieldValue(name, newValue ? newValue.id : null);
    };

    return (
        <Autocomplete
            {...props}
            value={selectedOption}
            options={options}
            onChange={handleChange}
            getOptionLabel={(option: Option) => (option ? option.label : '')}
            isOptionEqualToValue={(option, value) => option.label === value.label}
        />
    );
};
export default FormikAutocomplete;
