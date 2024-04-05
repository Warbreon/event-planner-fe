import { ButtonClassName } from './buttonClassName';
import styles from './ButtonComponent.module.css';

type Props = {
	title: string;
	styleClassName: ButtonClassName;
};

const ButtonComponent: React.FC<Props> = ({ title, styleClassName }) => {
	return (
		<button className={styles[styleClassName]} type='submit'>
			{title}
		</button>
	);
};

export default ButtonComponent;
