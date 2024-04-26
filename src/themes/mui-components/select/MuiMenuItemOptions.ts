import { COLORS } from '../../styles/Colors';
import FONT_FAMILY from '../../styles/Font';

const muiMenuItemOptions = {
	styleOverrides: {
		root: {
			width: '100%',
			fontFamily: FONT_FAMILY,
			borderRadius: '10px',
			'&:hover': {
				backgroundColor: COLORS.HOVER_VERY_LIGHT_GRAY,
			},
			'&.Mui-focusVisible': {
				backgroundColor: COLORS.GRAY_BORDER,
			},
			'&.Mui-selected': {
				backgroundColor: COLORS.GRAY_BORDER,
			},
		},
	},
};

export default muiMenuItemOptions;
