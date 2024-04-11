import GenericButton, { ButtonTypes } from '../../buttons/ButtonComponent';
import Form from '../../../shared/forms/formik/Form'
import FormikDropzone from '../../../shared/forms/elements/formik-elements/file-upload/FormikDropzone';
import { BUTTON_STYLES } from '../../../themes/styles/button';
import { eventFormSchema } from '../../../utils/schemas/EventFormSchema';
import styles from './EventForm.module.css';
import EventFormVM from './EventFormVM';
import PageHeader from '../../headers/page-headers/PageHeader';
import DateAndTimeSection from './date-and-time-section/DateAndTimeSection';
import { Divider } from '@mui/material';

const EventForm = () => {
  const eventVM = EventFormVM();

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <PageHeader
          text={eventVM.headerText}
        />
      </div>
      <Form
        initialValues={eventVM.initialValues}
        validationSchema={eventFormSchema}
        onSubmit={eventVM.onSubmit}
      >
        <div className={styles.formContainer}>
          <FormikDropzone
            name='imageUrl'
            containerStyles={styles.eventMainImage}
            buttonStyles={styles.uploadButton}
          />
          <div className={styles.mainFormContainer}>
            <DateAndTimeSection />
            <Divider className={styles.divider} />
          </div>
          <div className={styles.buttonsContainer}>
            <GenericButton
              title='Cancel'
              style={`${BUTTON_STYLES.OUTLINED_GREY_BORDER} ${styles.cancelButton}`}
              type={ButtonTypes.button}
              onClick={eventVM.handleCancelOnClick}
            />
            <GenericButton
              title='Create event'
              style={styles.submitButton}
              type={ButtonTypes.submit}
            />
          </div>
        </div>
      </Form>
    </div>
  )
}

export default EventForm