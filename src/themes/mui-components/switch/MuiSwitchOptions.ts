import { COLORS } from '../../styles/Colors';

const muiSwitchOptions = {
	styleOverrides: {
		root: {
			width: 'auto',
			height: 'auto',
		},
		switchBase: {
			padding: '13px',
			'&.Mui-checked': {
				transform: 'translateX(24px)',
				'& + .MuiSwitch-track': {
					opacity: 1,
					backgroundColor: COLORS.DARK_BLUE,
				},
				'& .MuiTouchRipple-root': {
					display: 'none',
				},
				'&:hover': {
					background: 'none',
				},
			},
			'&:hover': {
				background: 'none',
			},
		},
		thumb: {
			width: '1.375rem',
			height: '1.375rem',
			borderRadius: '0.6875rem',
			color: COLORS.WHITE,
			boxShadow: `0px 2px 1px 0px ${COLORS.DARK_BLUE_TRANSPARENT}, 0px 0px 3px 0px ${COLORS.DARK_BLUE_GLOW}`,
		},
		track: {
			width: '3rem',
			height: '1.5rem',
			borderRadius: '0.75rem',
			backgroundColor: COLORS.GRAY_BORDER,
			opacity: 1,
		},
	},
};

export default muiSwitchOptions;
