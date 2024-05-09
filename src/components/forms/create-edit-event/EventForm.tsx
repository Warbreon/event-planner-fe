import GenericButton, { ButtonTypes } from '../../buttons/ButtonComponent';
import Form from '../../../shared/forms/formik/Form';
import FormikDropzone from '../../../shared/forms/elements/formik-elements/file-upload/FormikDropzone';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import { eventFormSchema } from '../../../utils/schemas/EventFormSchema';
import styles from './EventForm.module.css';
import EventFormVM from './EventFormVM';
import PageHeader from '../../headers/page-headers/PageHeader';
import Details from '../create-edit-event/details/Details';
import DateAndTimeSection from './date-and-time-section/DateAndTimeSection';
import { Divider } from '@mui/material';
import Media from '../EventForm/media/Media';
import Location from './location/Location'
import AgendaSection from './formik-elements/agenda-section/AgendaSection';
import Registration from './registration/Registration';
import AddGuestsSection from '../../add-guests-to-event/AddGuestsSection';
import PricingSection from './pricing-section/PricingSection';

const EventForm = () => {
	const { initialValues, onSubmit, handleCancelOnClick, users } = EventFormVM();

	return (
		<div className={styles.container}>
			<div className={styles.pageHeader}>
				<PageHeader text='Add new event' />
			</div>
			<Form initialValues={initialValues} validationSchema={eventFormSchema} onSubmit={onSubmit}>
				<div className={styles.formContainer}>
					<FormikDropzone name='imageUrl' containerStyles={styles.eventMainImage} buttonStyles={styles.uploadButton} />
					<div className={styles.mainFormContainer}>
						<Details />
						<Divider className={styles.divider} />
						<DateAndTimeSection />
						<Divider className={styles.divider} />
						<Location />
						<Divider className={styles.divider} />
						<Media />
						<Divider className={styles.divider} />
						<AgendaSection agenda={initialValues.agenda} />
						<Divider className={styles.divider} />
						<Registration />
						<Divider className={styles.divider} />
						<PricingSection/>
						<Divider className={styles.divider} />
						<AddGuestsSection users={users || []} />
						<Divider className={styles.divider} />
					</div>
					<div className={styles.buttonsContainer}>
						<GenericButton
							title='Cancel'
							styles={`${BUTTON_STYLES.OUTLINED_GREY_BORDER} ${styles.cancelButton}`}
							type={ButtonTypes.button}
							onClick={handleCancelOnClick}
						/>
						<GenericButton title='Create event' styles={styles.submitButton} type={ButtonTypes.submit} />
					</div>
				</div>
			</Form>
		</div>
	);
};

export default EventForm;
