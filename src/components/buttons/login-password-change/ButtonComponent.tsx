import './ButtonComponent.css';
import { ButtonClassName } from './buttonClassName';

type Props = {
	title: string;
	styleClassName: ButtonClassName;
};

const ButtonComponent: React.FC<Props> = ({ title, styleClassName }) => {
	return (
		<button className={styleClassName} type='submit'>
			{title}
		</button>
	);
};

export default ButtonComponent;
