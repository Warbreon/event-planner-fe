import { Button } from '@mui/material';
import styles from './ButtonComponent.module.css';

type Props = {
	title: string;
};

const GenericButton: React.FC<Props> = ({ title }) => {
	return (
		<Button variant='contained' color='primary' type='submit' className={styles.genericButton}>
			{title}
		</Button>
	);
};

export default GenericButton;
