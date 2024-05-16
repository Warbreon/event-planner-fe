import { FileUpload } from "@mui/icons-material"
import FormikDropzone from "../../../../shared/forms/elements/formik-elements/file-upload/FormikDropzone";
import styles from './Media.module.css';
import PageHeader from "../../../headers/page-headers/PageHeader";
import { BUTTON_STYLES } from "../../../../themes/styles/Button";

const Media = () => {
    return (
        <div className={styles.container}>
            <PageHeader
                text='Media'
                className='event-form-section'
            />
            <FormikDropzone
                name='cardImageBase64'
                containerStyles={styles.mediaContainer}
                buttonStyles={`${styles.uploadButton} ${BUTTON_STYLES.UPLOAD_BUTTON}`}
                buttonText='Upload cover image'
                buttonIcon={<FileUpload />}
                mainCameraIconStyles={styles.mainCamera}
            />
        </div>
    )
}

export default Media