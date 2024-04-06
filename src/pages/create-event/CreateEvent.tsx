import GenericButton from '../../components/buttons/GenericButton';
import Form from '../../components/forms/Form'
import FormikDropzone from '../../components/forms/elements/FileUpload/FormikDropzone'
import { eventFormSchema } from '../../utils/schemas/eventFormSchema';
import styles from './CreateEvent.module.css';

const CreateEvent = () => {
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
              className={styles.cancelButton}
              onClick={() => { console.log('Canceled'); }}
            />
            <GenericButton
              title='Create event'
              className={styles.submitButton}
              buttonProps={{ type: 'submit' }}
            />
          </div>
        </div>
      </Form>
    </div>
  )
}

export default CreateEvent