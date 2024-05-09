import { COLORS } from '../../styles/Colors';
import FONT_FAMILY from '../../styles/Font';

const muiTextFieldOptions = {
	defaultProps: {
		InputLabelProps: {
			shrink: true,
		},
	},
	styleOverrides: {
		root: {
			width: '100%',
			'&.guest-search-bar': {
				paddingRight: '0.25rem',
				borderRadius: '6.25rem',
				height: '2.5rem',
				border: '1px solid ' + COLORS.GRAY_BORDER,
				fontFamily: FONT_FAMILY,
				'& fieldset ': {
					border: 'none',
				},
				'& input': {
					paddingLeft: '1.5rem',
					'&::placeHolder ': {
						color: COLORS.PLACEHOLDER,
						weight: 400,
						opacity: 0.75,
					},
				},
			},
			'&.event-search-bar': {
				'& fieldset ': {
					border: 'none',
				},
				'& input': {
					fontSize: '0.875rem',
					fontWeight: 400,
					lineHeight: '1.5rem',
					'&::placeHolder ': {
						color: COLORS.PLACEHOLDER,
					},
				},
			},
			'&.event-price': {
				width: '15.25rem',
				'& input::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button': {
					WebkitAppearance: 'none',
				},
			},
			'&.event-tickets': {
				width: '22rem',
				'& input[type=number]::-webkit-inner-spin-button': {
					WebkitAppearance: 'none',
				}
			},
		},
	},
};

export default muiTextFieldOptions;
