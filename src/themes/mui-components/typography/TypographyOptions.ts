import { COLORS } from '../../styles/Colors';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import FONT_FAMILY from '../../styles/Font';

const typographyOptions: TypographyOptions = {
	fontFamily: FONT_FAMILY,
	h1: {
		fontSize: '2rem',
		fontWeight: 400,
		color: COLORS.BLACK,

		'&.event-header': {
			marginBottom: '1rem',
			width: '70%',
		},

		'&.centered': {
			whiteSpace: 'nowrap',
			textAlign: 'center',
		},

		'&.event-form-section': {
			lineHeight: '2rem',
			fontSize: '1.25rem',
		},
	},

	h2: {
		fontSize: '1.25rem',
		fontWeight: 400,
	},

	h3: {
		fontSize: '1rem',
		fontWeight: 400,
	},
	body1: {
		fontSize: '0.875rem',
		fontWeight: 400,
		color: COLORS.BLACK,

		'&.centered': {
			marginTop: '1rem',
			textAlign: 'center',
		},
		'&.gray-font': {
			color: COLORS.MEDIUM_DARK_GRAY,
			fontSize: '0.875rem',
			lineHeight: '1rem',
			marginBottom: '0.5rem',
		},

		'&.error-mesage': {
			color: COLORS.ERROR
		},
	},

	subtitle1: {
		'&.event-form-element': {
			fontSize: '0.875rem',
			lineHeight: '1rem',
			color: COLORS.MEDIUM_DARK_GRAY,
			marginBottom: '0.5rem',
		},
	},
	body2: {
		fontSize: '0.875rem',
		fontWeight: 400,
		color: COLORS.MEDIUM_DARK_GRAY,
	},

	caption: {
		'&.guest-registration-status': {
			fontWeight: 400,
			width: '6rem',
			height: '1.5rem',
			textTransform: 'capitalize',
			textAlign: 'right',
			color: COLORS.MEDIUM_DARK_GRAY,
		}
	}
};

export default typographyOptions;
