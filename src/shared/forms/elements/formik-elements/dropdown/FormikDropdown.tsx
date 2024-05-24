import { FC, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import Dropdown from '../../../../../components/dropdown/Dropdown';
import { SelectChangeEvent, Typography } from '@mui/material';
import styles from './FormikDropdown.module.css';
import { EventFormValues } from '../../../../../interfaces/EventFormValuesInterface';

interface FormikDropdownProps {
	name: string;
	label?: string;
	options: Array<{ value: string | number; label: string }>;
	menuItemClassName?: string;
	selectClassName?: string;
	multiple?: boolean;
}

const FormikDropdown: FC<FormikDropdownProps> = ({
	name,
	label,
	options,
	menuItemClassName,
	selectClassName,
	multiple,
}) => {
	const [field, , helpers] = useField<string | string[]>(name);

	const { values: formikValues } = useFormikContext<EventFormValues>();

	useEffect(() => {
		if (name === 'eventTagIds') {
			const selectedIds: string[] = formikValues.eventTagIds.map((id) => id.toString()) || [];
			helpers.setValue(multiple ? selectedIds : selectedIds[0] || '');
		}

		if (name === 'currency') {
			helpers.setValue(formikValues.currency || 'EUR');
		}
	}, [helpers, multiple, name]);


	const handleChange = (event: SelectChangeEvent<string | string[]>) => {
		const value = event.target.value;
		helpers.setValue(multiple ? (value as string[]) : value);
	};

	return (
		<div className={styles.container}>
			<Typography variant='body1' className='gray-font'>
				{label}
			</Typography>
			<Dropdown
				multiple={multiple}
				value={field.value}
				onChange={handleChange}
				options={options}
				formControlClassName={styles.formControlClassName}
				selectClassName={!selectClassName ? styles.formControlClassName : selectClassName}
				menuItemClassName={menuItemClassName}
			/>
		</div>
	);
};

export default FormikDropdown;
