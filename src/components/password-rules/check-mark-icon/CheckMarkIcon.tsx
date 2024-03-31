import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ICON_TYPE from './iconType';

enum ICON_COLOR {
	CORRECT = '#4CAF50',
	NEUTRAL = '#DDDDDD',
	ERROR = '#EF5350',
}

type Props = {
	state: string;
};

const CheckMarkIcon: React.FC<Props> = ({ state }) => {
	const iconColor = (state: string) => {
		switch (state) {
			case ICON_TYPE.NEUTRAL:
				return ICON_COLOR.NEUTRAL;
			case ICON_TYPE.CORRECT:
				return ICON_COLOR.CORRECT;
		}
	};

	return <CheckCircleIcon htmlColor={iconColor(state)} />;
};

export default CheckMarkIcon;
