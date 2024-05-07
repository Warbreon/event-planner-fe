import { FC } from 'react';
import GenericButton, { ButtonTypes } from '../ButtonComponent';
import styles from './ButtonComponentGroup.module.css';

interface ButtonConfig {
	label: string;
	onClick: () => void;
	className?: string;
	type?: ButtonTypes;
}

interface Props {
	buttons: ButtonConfig[];
	className?: string;
}

const ButtonComponentGroup: FC<Props> = ({ buttons, className }) => {
	return (
		<div className={`${styles.buttonGroup} ${className}`}>
			{buttons.map((button, index) => (
				<GenericButton
					key={index}
					title={button.label}
					onClick={button.onClick}
					styles={`${button.className} ${styles.button}`}
					type={button.type || ButtonTypes.button}
				/>
			))}
		</div>
	);
};

export default ButtonComponentGroup;
