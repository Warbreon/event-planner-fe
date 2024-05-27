import { FileUpload } from '@mui/icons-material';
import FormikDropzone from '../../../../shared/forms/elements/formik-elements/file-upload/FormikDropzone';
import styles from './Media.module.css';
import PageHeader from '../../../headers/page-headers/PageHeader';
import { BUTTON_STYLES } from '../../../../themes/styles/Button';
import { FC } from 'react';

interface MediaProps {
	initialImageUrl?: string;
}

const Media: FC<MediaProps> = ({ initialImageUrl }) => {
    return (
        <div className={styles.container}>
            <PageHeader text='Media' className='event-form-section' />
            <FormikDropzone
                name='cardImageBase64'
                containerStyles={styles.mediaContainer}
                buttonStyles={!initialImageUrl ? `${styles.uploadButton} ${BUTTON_STYLES.UPLOAD_BUTTON}` : undefined}
                buttonText={!initialImageUrl ? 'Upload cover image' : undefined}
                buttonIcon={!initialImageUrl ? <FileUpload /> : undefined}
                mainCameraIconStyles={styles.mainCamera}
                initialImageUrl={initialImageUrl}
            />
        </div>
    );
};

export default Media;
