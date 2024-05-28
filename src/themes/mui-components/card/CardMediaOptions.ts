import { COLORS } from '../../styles/Colors';

const muiCardMediaOptions = {
	styleOverrides: {
		img: {
			borderRadius: '12px',
			height: '320px',
			width: '100%',
			border: `1px solid ${COLORS.GRAY_BORDER}`,

			'&.my-events': {
				width: '200px',
				height: '156px',
			},

			'&.event-page': {
				width: '100%',
				marginTop: '1rem',
				marginBottom: '2rem',
			},
			'&.full-size-picture': {
				width: '100%',
				height: '100%',
				border: 'none',
			},
		},
	},
};
export default muiCardMediaOptions;
