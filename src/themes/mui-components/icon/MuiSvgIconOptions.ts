import { COLORS } from '../../styles/Colors';

const muiSvgIconOptions = {
	styleOverrides: {
		root: {
			'&.guest-bar-search-icon': {
				position: 'absolute',
				pointerEvents: 'none',
				color: COLORS.PLACEHOLDER,
			},
			'&.gray-icon': {
				color: COLORS.PLACEHOLDER,
			},
		},
	},
};
export default muiSvgIconOptions;
