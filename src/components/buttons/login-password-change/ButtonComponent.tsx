import './ButtonComponent.css';

type Props = {
	title: string;
	onClick: () => void;
};

const ButtonComponent: React.FC<Props> = ({ title, onClick }) => {
	return (
		<button className='shared-button' type='submit' onClick={onClick}>
			{title}
		</button>
	);
};

export default ButtonComponent;
