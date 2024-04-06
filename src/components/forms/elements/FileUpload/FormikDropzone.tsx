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
}

const defaultAccept: Accept = {
    'image/*': ['.jpeg', '.jpg', '.png']
};
const FormikDropzone: React.FC<Props> = ({
    name,
    accept = defaultAccept,
    buttonText,
    buttonIcon = <CameraAlt />,
    onFileAccepted,
    containerStyles,
    buttonStyles,
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, , helpers] = useField(name);
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
            helpers.setTouched(true);

            if (onFileAccepted) {
                onFileAccepted(file);
            }
        },
    });

    const combinedContainerStyles = classNames(
        styles.dropzoneContainer,
        containerStyles
    );

    return (
        <div {...getRootProps()} className={combinedContainerStyles}>
            <input {...getInputProps()} />
            {(!field.value && (
                <IconButton className={styles.centerIconButton} disabled>
                    <CameraAlt className={styles.centerIcon}/>
                </IconButton>
            ))}

            {!field.value && buttonText ? (
                <Button startIcon={buttonIcon} className={buttonStyles}>
                    {buttonText}
                </Button>
            ) : (
                <IconButton className={buttonStyles}>
                    {buttonIcon}
                </IconButton>
            )}

            {field.value && preview && (
                <img src={preview} alt="Preview" className={styles.imagePreview} />
            )}
        </div>
    );
};

export default FormikDropzone;