import { Autocomplete, TextFieldProps } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import FormikTextField from '../../../shared/forms/elements/formik-elements/text-field/FormikTextField';

interface Option {
	id: string;
	label: string;
}

interface Props {
	name: string;
	title: string;
	options: Array<Option>;
	textFieldProps?: TextFieldProps;
	titleClassName: string;
}

const FormikAutocomplete: React.FC<Props> = ({ name, title, options, textFieldProps, titleClassName }) => {
	const { setFieldValue } = useFormikContext<any>();
	const [field] = useField(name);

	const selectedOption = options.find((option) => option.id === field.value) || null;
	const handleChange = (_: React.ChangeEvent<{}>, newValue: Option | null) => {
		setFieldValue(name, newValue ? newValue.id : '');
	};

	return (
		<Autocomplete
			{...field}
      popupIcon=''
			multiple={false}
			value={selectedOption}
			options={options}
			onChange={handleChange}
			getOptionLabel={(option) => (option ? option.label : '')}
			isOptionEqualToValue={(option, value) => option.id === value.id}
			renderInput={(params) => (
				<FormikTextField {...params} {...textFieldProps} name={name} titleClassName={titleClassName} title={title} />
			)}
		/>
	);
};
export default FormikAutocomplete;
