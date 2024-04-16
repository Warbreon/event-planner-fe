import styles from './AgendaItem.module.css';
import FormikTimePicker from '../../../../shared/forms/elements/formik-elements/time-picker/FormikTimePicker';
import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { TIME_PICKER_STYLES } from '../../../../themes/styles/TimePicker';
import Title from '../../../title/Title';

interface Props {
    showLabels?: boolean;
    onDelete: () => void;
    namePrefix: string;
}

const AgendaItem: React.FC<Props> = ({ showLabels, onDelete, namePrefix }) => {
    return (
        <div className={styles.container}>
            <FormikTimePicker
                title={showLabels ? 'Time' : ''}
                name={`${namePrefix}.time`}
                timePickerClassName={TIME_PICKER_STYLES.BIG}
            />
            <FormikTextField
                title={showLabels ? 'Description' : ''}
                name={`${namePrefix}.description`}
                titleClassName='event-form-element'
            />
            <div className={styles.buttonContainer}>
                {showLabels && (
                    <Title
                        text=''
                        titleClassName={styles.hiddenTitle}
                    />
                )}
                <IconButton edge="end" aria-label="delete" onClick={onDelete} className={styles.deleteButton}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    )
}

export default AgendaItem