import ChipSelector from '../../../chip-selector/ChipSelector';
import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import { Box, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import LocationVM from './LocationVM';
import FormikAutocomplete from '../../formik-elements/FormikAutocomplete';
import PageHeader from '../../../headers/page-headers/PageHeader';
import styles from './Location.module.css';
import { TYPOGRAPHY_STYLES } from '../../../../themes/styles/Typography';
import { EventFormValues } from '../../../../interfaces/EventFormValuesInterface';
import { LocationTags } from '../../../../constants/LocationTags';
import LoadingIndicator from '../../../loading-indicator/LoadingIndicator';

const Location = () => {
	const { values, setFieldValue } = useFormikContext<EventFormValues>();
	const { placeholder, key, getChipClassName, handleTagChange, options, locations, error, isLoading } = LocationVM({
		values,
		setFieldValue,
	});

	if (error) {
		return <Typography variant='body1'>Could not fetch venue list</Typography>;
	}

	if (isLoading) {
		return <LoadingIndicator />;
	}

	return (
		<div className={`${styles.container} ${key === LocationTags.TBD ? styles['tbd-gap'] : ''}`}>
			<div className={styles.title}>
				<PageHeader text='Location' className='event-form-section' />
			</div>
			<div className={styles.chipSelectorGroup}>
				<ChipSelector
					options={options}
					onSelect={(key) => handleTagChange(key)}
					selectedKeys={key}
					getChipClassName={getChipClassName}
					multiple={false}
				/>
			</div>
			<Box mt={2}>
				{key === LocationTags.PHYSICAL && (
					<FormikAutocomplete
						name='addressId'
						options={locations}
						renderInput={(params) => (
							<FormikTextField
								{...params}
								name='addressId'
								title='Venue'
								titleClassName={TYPOGRAPHY_STYLES.GRAY_FONT_INPUT}
								placeholder={placeholder}
							/>
						)}
					/>
				)}
				{key === LocationTags.ONLINE && (
					<FormikTextField
						name='inviteUrl'
						type='text'
						title='Link to a virtual event'
						titleClassName={TYPOGRAPHY_STYLES.GRAY_FONT_INPUT}
						placeholder={placeholder}
					/>
				)}
			</Box>
		</div>
	);
};
export default Location;
