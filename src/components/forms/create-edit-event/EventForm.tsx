import GenericButton, { ButtonTypes } from '../../buttons/ButtonComponent';
import Form from '../../../shared/forms/formik/Form';
import FormikDropzone from '../../../shared/forms/elements/formik-elements/file-upload/FormikDropzone';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import styles from './EventForm.module.css';
import EventFormVM from './EventFormVM';
import PageHeader from '../../headers/page-headers/PageHeader';
import Details from '../create-edit-event/details/Details';
import DateAndTimeSection from './date-and-time-section/DateAndTimeSection';
import { Divider } from '@mui/material';
import Media from '../EventForm/media/Media';
import Location from './location/Location';
import AgendaSection from './formik-elements/agenda-section/AgendaSection';
import Registration from './registration/Registration';
import AddGuestsSection from '../../add-guests-to-event/AddGuestsSection';
import PricingSection from './pricing-section/PricingSection';
import About from './about/About';
import SnackbarComponent, { ALERT_SEVERITY } from '../../snackbar/SnackbarComponent';
import { FC } from 'react';
import { Event } from '../../../models/Event';
import { editEventFormSchema } from '../../../utils/schemas/EditEventFormSchema';
import { createEventFormSchema } from '../../../utils/schemas/CreateEventFormSchema';

interface EventFormProps {
	headerTitle: string;
	event?: Event | null;
}

const EventForm: FC<EventFormProps> = ({ headerTitle, event }) => {
	const { initialValues, onSubmit, handleCancelOnClick, isSubmitting, submitError } =
		EventFormVM(event || null);

	const validationSchema = !!event ? editEventFormSchema : createEventFormSchema;

	return (
		<div className={styles.container}>
			<div className={styles.pageHeader}>
				<PageHeader text={headerTitle} />
			</div>
			<Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				<div className={styles.formContainer}>
					<FormikDropzone
						name='imageBase64'
						containerStyles={styles.eventMainImage}
						buttonStyles={styles.uploadButton}
						initialImageUrl={event?.imageUrl}
					/>
					<div className={styles.mainFormContainer}>
						<Details />
						<Divider className={styles.divider} />
						<DateAndTimeSection />
						<Divider className={styles.divider} />
						<Location />
						<Divider className={styles.divider} />
						<Media initialImageUrl={event?.cardImageUrl} />
						<Divider className={styles.divider} />
						<About />
						<Divider className={styles.divider} />
						<AgendaSection agenda={initialValues.agenda} />
						<Divider className={styles.divider} />
						<Registration />
						<Divider className={styles.divider} />
						<PricingSection />
						<Divider className={styles.divider} />
						<AddGuestsSection />
						<Divider className={styles.divider} />
					</div>
					<div className={styles.buttonsContainer}>
						<GenericButton
							title='Cancel'
							styles={`${BUTTON_STYLES.OUTLINED_GRAY_BORDER} ${styles.cancelButton}`}
							type={ButtonTypes.button}
							onClick={handleCancelOnClick}
							disabled={isSubmitting}
						/>
						<GenericButton
							title={event ? 'Edit event' : 'Create event'}
							styles={styles.submitButton}
							type={ButtonTypes.submit}
							disabled={isSubmitting}
						/>
					</div>
				</div>
			</Form>
			<SnackbarComponent open={!!submitError} message={submitError ?? ''} severity={ALERT_SEVERITY.ERROR} />
		</div>
	);
};

export default EventForm;
