import { COLORS } from '../../styles/Colors';
import FONT_FAMILY from '../../styles/Font';

const muiOutlinedInputOptions = {
	styleOverrides: {
		root: {
			fontFamily: FONT_FAMILY,
			fontSize: '1rem',
			color: COLORS.BLACK,
			borderRadius: '8px',
			borderWidth: '1px',
			height: '40px',
			'&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
				borderColor: COLORS.GRAY_BORDER,
				borderWidth: '2px',
			},
			'&.Mui-error .MuiOutlinedInput-notchedOutline': {
				borderColor: COLORS.ERROR,
			},
			'& input::placeholder': {
				color: COLORS.PLACEHOLDER,
				fontWeight: 400,
				fontSize: '0.875rem',
				lineHeight: '1rem'
			},
		},
	},
};

export default muiOutlinedInputOptions;
