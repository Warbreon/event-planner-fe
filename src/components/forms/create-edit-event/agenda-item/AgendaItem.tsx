import styles from './AgendaItem.module.css';
import FormikTimePicker from '../../../../shared/forms/elements/formik-elements/time-picker/FormikTimePicker';
import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
            />
            <FormikTextField
                title={showLabels ? 'Description' : ''}
                name={`${namePrefix}.description`}
                titleClassName='event-form-element'
            />
            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                <Delete />
            </IconButton>
        </div>
    )
}

export default AgendaItem