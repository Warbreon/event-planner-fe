import { COLORS } from '../../styles/Colors';
import FONT_FAMILY from '../../styles/Font';

const muiTabOptions = {
	styleOverrides: {
		root: {
			color: COLORS.BLACK,
			fontFamily: FONT_FAMILY,
			textTransform: 'none',
			fontSize: '1rem',
			fontWeight: '400',
			borderRadius: '100px',
			height: '64px',
			'&.Mui-selected': {
				fontWeight: '600',
				color: COLORS.BLACK,
			},
			'&:hover': {
				background: COLORS.VERY_LIGHT_GRAY,
			},
			'&:active': {
				'& .MuiTouchRipple-root': {
					display: 'none',
				},
			},
		},
	},
};

export default muiTabOptions;
