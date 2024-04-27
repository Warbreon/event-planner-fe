import { COLORS } from '../../styles/Colors';

const muiChipOptions = {
	styleOverrides: {
		root: {
			backgroundColor: COLORS.GRAY,

			'&.select-tag': {
				height: '2rem',
				borderRadius: '6.25rem',
				border: `1px solid ${COLORS.GRAY_BORDER}`,
				padding: '0.375rem 0.1875rem',
				backgroundColor: COLORS.WHITE,
			},
			'&.select-option': {
				marginRight: '0.2px',
				height: '2rem',
				borderRadius: '6.25rem',
				border: `1px solid ${COLORS.GRAY_BORDER}`,
				padding: '0.375rem 0.1875rem',
				backgroundColor: COLORS.WHITE,
			},
			'&.event-page-tag': {
				marginRight: '0.5rem',
			},
			'&:active': {
				'& .MuiTouchRipple-root': {
					display: 'none',
				},
			},
			'&.tag-selected': {
				borderColor: COLORS.BLACK,
				'& span': {
					fontWeight: 600,
				},
			},
		},
	},
};

export default muiChipOptions;
