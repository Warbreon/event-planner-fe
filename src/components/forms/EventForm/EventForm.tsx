import GenericButton, { ButtonTypes } from '../../buttons/ButtonComponent';
import Form from '../../../shared/forms/formik/Form'
import FormikDropzone from '../../../shared/forms/elements/formikElements/FileUpload/FormikDropzone'
import { BUTTON_STYLES } from '../../../themes/styles/button';
import { eventFormSchema } from '../../../utils/schemas/eventFormSchema';
import styles from './EventForm.module.css';

const EventForm = () => {
    return (
        <div className={styles.container}>
          <Form
            initialValues={{ image: null }}
            validationSchema={eventFormSchema}
            onSubmit={() => { console.log('Submitted'); }}
          >
            <div className={styles.formContainer}>
              <FormikDropzone
                name='image'
                containerStyles={styles.eventMainImage}
                buttonStyles={styles.uploadButton}
              />
              <div className={styles.mainFormContainer}>
              </div>
              <div className={styles.buttonsContainer}>
                <GenericButton
                  title='Cancel'
                  style={`${BUTTON_STYLES.OUTLINED_GREY_BORDER} ${styles.cancelButton}`}
                  type={ButtonTypes.button}
                  onClick={() => { console.log('Canceled'); }}
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