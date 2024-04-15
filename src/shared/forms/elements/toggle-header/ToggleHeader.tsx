import { Switch } from '@mui/material';
import PageHeader from '../../../../components/headers/page-headers/PageHeader';
import styles from './ToggleHeader.module.css';

interface Props {
    title: string;
    isChecked: boolean;
    onToggle: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const ToggleHeader: React.FC<Props> = ({ title, isChecked, onToggle }) => {
    return (
        <div className={styles.container}>
            <PageHeader
                text={title}
                className='event-form-section'
            />
            <Switch 
                checked={isChecked}
                onChange={onToggle}
            />
        </div>
    )
}

export default ToggleHeader