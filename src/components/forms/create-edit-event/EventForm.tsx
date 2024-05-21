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
import { FC } from 'react';
import { Event } from '../../../models/Event';
import PricingSection from './pricing-section/PricingSection';
import About from './about/About';
import SnackbarComponent, { ALERT_SEVERITY } from '../../snackbar/SnackbarComponent';

interface EventFormProps {
	headerTitle: string;
	event?: Event | null;
}

const EventForm: FC<EventFormProps> = ({ headerTitle, event }) => {
	const {
		initialValues,
		onSubmit,
		handleCancelOnClick,
		users,
		eventTags,
		selectedTags,
		imageUrl,
		cardUrl,
		parsedAgendaItems,
		isCreateEventLoading,
		createEventError,
	} = EventFormVM(event ?? null);

	return (
		<div className={styles.container}>
			<div className={styles.pageHeader}>
				<PageHeader text={headerTitle} />
			</div>
			<Form initialValues={initialValues} onSubmit={onSubmit}>
				<div className={styles.formContainer}>
					<FormikDropzone
						name='imageBase64'
						containerStyles={styles.eventMainImage}
						buttonStyles={styles.uploadButton}
					/>
					<div className={styles.mainFormContainer}>
						<Details tags={eventTags || []} selectedTags={selectedTags} />
						<Divider className={styles.divider} />
						<DateAndTimeSection />
						<Divider className={styles.divider} />
						<Location />
						<Divider className={styles.divider} />
						<Media initialImageUrl={cardUrl} />
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
							disabled={isCreateEventLoading}
						/>
						<GenericButton
							title='Create event'
							styles={styles.submitButton}
							type={ButtonTypes.submit}
							disabled={isCreateEventLoading}
						/>
					</div>
				</div>
			</Form>
			<SnackbarComponent open={!!createEventError} message={createEventError ?? ''} severity={ALERT_SEVERITY.ERROR} />
		</div>
	);
};

export default EventForm;
