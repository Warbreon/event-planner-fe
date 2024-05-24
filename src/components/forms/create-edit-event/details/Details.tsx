import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import FormikDropdown from '../../../../shared/forms/elements/formik-elements/dropdown/FormikDropdown';
import PageHeader from '../../../headers/page-headers/PageHeader';
import styles from './Details.module.css';
import DetailsVM from './DetailsVM';

const Details = () => {
	const { eventTagsOptions } = DetailsVM();

	return (
		<div className={styles.container}>
			<PageHeader text='Details' className='event-form-section' />
			<div className={styles.textField}>
				<FormikTextField
					name='eventName'
					type='text'
					title='Event Name'
					placeholder='Enter short descriptive event title'
					titleClassName='gray-font-input'
					inputProps={{ maxLength: 255 }}
				/>
			</div>
			<div className={styles.dropdown}>
				<FormikDropdown
					name='eventTagIds'
					label='Event Type'
					multiple={true}
					options={eventTagsOptions}
				/>
			</div>
		</div>
	);
};

export default Details;
