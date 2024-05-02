import { COLORS } from '../../styles/Colors';

const chechboxOptions = {
	styleOverrides: {
		root: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
			'&.Mui-checked:hover': {
				backgroundColor: 'transparent',
			},
			'&:active': {
				backgroundColor: 'transparent',
			},
			'&.Mui-checked': {
				color: COLORS.DARK_BLUE,
			}
		}
	}
};

export default chechboxOptions;
