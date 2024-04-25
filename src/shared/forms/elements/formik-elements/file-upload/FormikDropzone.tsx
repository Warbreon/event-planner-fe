import { CameraAlt } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useField, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { Accept, useDropzone } from 'react-dropzone';
import styles from './FormikDropzone.module.css';
import classNames from 'classnames';

interface Props {
    name: string;
    accept?: Accept;
    buttonText?: string;
    buttonIcon?: JSX.Element;
    onFileAccepted?: (file: File) => void;
    containerStyles?: string;
    buttonStyles?: string;
    mainCameraIconStyles?: string;
}

const defaultAccept: Accept = {
    'image/jpeg': ['.jpeg', '.png']
};
const FormikDropzone: React.FC<Props> = ({
    name,
    accept = defaultAccept,
    buttonText,
    buttonIcon = <CameraAlt />,
    onFileAccepted,
    containerStyles,
    buttonStyles,
    mainCameraIconStyles,
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (preview) {
            return () => URL.revokeObjectURL(preview);
        }
    }, [preview]);

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            const previewUrl = URL.createObjectURL(file);

            setFieldValue(name, file);
            setPreview(previewUrl);

            if (onFileAccepted) {
                onFileAccepted(file);
            }
        },
    });

    const combinedContainerStyles = classNames(
        styles.dropzoneContainer,
        { [styles.errorBorder]: meta.touched && meta.error },
        containerStyles
    );

    return (
        <div {...getRootProps()} className={combinedContainerStyles}>
            <input {...getInputProps()} />
            {(!field.value && (
                <IconButton className={styles.centerIconButton} disabled>
                    <CameraAlt className={`${styles.centerIcon} ${mainCameraIconStyles ?? ''}`} />
                </IconButton>
            ))}

            {!field.value && buttonText && (
                <Button startIcon={buttonIcon} className={buttonStyles}>
                    {buttonText}
                </Button>
            )}

            {!field.value && !buttonText && (
                <IconButton className={buttonStyles}>
                    {buttonIcon}
                </IconButton>
            )}

            {meta.touched && meta.error && (
                <p className={styles.errorMessage}>{meta.error}</p>
            )}
            {field.value && preview && (
                <img src={preview} alt="Preview" className={styles.imagePreview} />
            )}
        </div>

    );
};

export default FormikDropzone;