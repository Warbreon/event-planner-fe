import { Switch } from '@mui/material';
import PageHeader from '../../../../components/headers/page-headers/PageHeader';
import styles from './ToggleHeader.module.css';

interface Props {
	title: string;
	isChecked: boolean;
	onToggle: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
	showToggle: boolean;
}

const ToggleHeader: React.FC<Props> = ({ title, isChecked, onToggle, showToggle }) => {
	return (
		<div className={styles.container}>
			<PageHeader text={title} className='event-form-section' />
			{showToggle && <Switch checked={isChecked} onChange={onToggle} className={styles.switch} />}
		</div>
	);
};

export default ToggleHeader;
