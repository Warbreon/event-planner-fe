import { KeyboardArrowDown } from '@mui/icons-material';
import { COLORS } from '../../styles/Colors';
import FONT_FAMILY from '../../styles/Font';

const muiSelectOptions = {
	styleOverrides: {
		root: {
			fontSize: '0.875rem',
			lineHeight: '1.25rem',
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
			},
			'&.event-header-dropdown': {
				width: '8.125rem',
				textAlign: 'right',
				marginLeft: '1rem',
				height: '1rem',
				'& fieldset ': {
					border: 'none',
				},
				fontWeight: 600,
				'.MuiSelect-icon': {
					color: COLORS.BLACK,
				},
				'div': {
					padding: 0,
				}
			},
			'&.create-event-price': {
				marginTop: '8px',
				height: '40px',
				width: '100px',
			},
		},
	},
	defaultProps: {
		IconComponent: KeyboardArrowDown,
	},
};
export default muiSelectOptions;
