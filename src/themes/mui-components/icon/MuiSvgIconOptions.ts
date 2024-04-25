import { COLORS } from '../../styles/Colors';

const muiSvgIconOptions = {
	styleOverrides: {
		root: {
			color: COLORS.PLACEHOLDER,
			'&.guest-bar-search-icon ': {
				position: 'absolute',
				pointerEvents: 'none',
				color: COLORS.PLACEHOLDER,
			},
			'&.event-bar-search-icon ': {
				color: COLORS.PLACEHOLDER,
			},
		},
	},
};
export default muiSvgIconOptions;
