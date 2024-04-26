import { KeyboardArrowDown } from '@mui/icons-material';
import { COLORS } from '../../styles/Colors';
import FONT_FAMILY from '../../styles/Font';

const muiSelectOptions = {
	styleOverrides: {
		root: {
			height: '100%',
			width: '100%',
			color: COLORS.BLACK,
			borderRadius: '8px',
			fontFamily: FONT_FAMILY,
			borderColor: COLORS.GRAY_BORDER,
			'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
				borderColor: COLORS.GRAY_BORDER,
			},
			'.MuiSelect-icon': {
				color: COLORS.BLACK,
				marginRight: '1rem',
			},
		},
	},
	defaultProps: {
		IconComponent: KeyboardArrowDown,
	},
};
export default muiSelectOptions;
