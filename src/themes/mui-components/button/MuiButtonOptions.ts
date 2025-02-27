import { COLORS } from '../../styles/Colors';
import FONT_FAMILY from '../../styles/Font';

const muiButtonOptions = {
	styleOverrides: {
		root: {
			color: COLORS.BLACK,
			background: COLORS.WHITE,
			fontFamily: FONT_FAMILY,
			textTransform: 'none',
			fontSize: '0.875rem',
			fontWeight: '600',
			borderRadius: '100px',
			boxShadow: 'none',
			width: '100%',
			'&:hover': {
				boxShadow: 'none',
			},
			'&:active': {
				'& .MuiTouchRipple-root': {
					display: 'none',
				},
			},

			//black button used in sign in, password reset,
			//home page - add event and load more
			'&.black': {
				height: '44px',
				color: COLORS.WHITE,
				background: COLORS.BLACK,
				padding: '14px 32px',
				'&:hover': {
					background: COLORS.HOVER_BLACK,
				},
			},

			'&.black-background': {
				color: COLORS.WHITE,
				background: COLORS.BLACK,
				'&:hover': {
					background: COLORS.HOVER_BLACK,
				},
			},

			'&.modal-button': {
				height: '32px',
				fontWeight: '500',
				fontSize: '0.75rem',
				lineHeight: '1rem'
			},

			//register, get tickets, add guests,
			'&.gray': {
				background: COLORS.GRAY,
				'&:hover': {
					background: COLORS.HOVER_GRAY,
				},
			},

			//blue 'going' button
			'&.blue': {
				color: COLORS.TEXT_BLUE,
				background: COLORS.BLUE,
				'&:hover': {
					background: COLORS.HOVER_BLUE,
				},
			},

			//edit button in my events
			//add guests in event page header
			//cancel button
			'&.outlined-gray-border': {
				border: '1px solid ' + COLORS.GRAY_BORDER,
				'&:hover': {
					background: COLORS.HOVER_OUTLINED_GRAY_BORDER,
				},
			},
			
			// [+] button in event guests section
			'&.light-gray-box': {
				borderRadius: '12px',
				height: '80px',
				background: COLORS.LIGHT_GRAY,
				'&:hover': {
					background: COLORS.HOVER_LIGHT_GRAY,
				},
			},

			'&.light-gray-box-create-event': {
				height: '104px',
			},


			// confirm button in event guests section
			'&.light-gray-round-small': {
				height: '32px',
				width: '103px',
				gap: '10px',
				padding: '8px 24px 8px 24px',
				borderRadius: '100px',
				border: '1px solid ' + COLORS.GRAY_BORDER,
				'&:hover': {
					background: COLORS.HOVER_LIGHT_GRAY,
				},
				'&.confirm-notification': {
					background: 'inherit',
					'&:hover': {
						background: COLORS.HOVER_LIGHT_GRAY,
					},
					'&.confirmed': {
						background: COLORS.SUCCESS,
					}
				}
			},
			// decline button in event guests section (modification)
			'&.light-gray-round-small-borderless': {
				width: '99px',
				margin: '10px',
				border: 'none',
			},

			// [+] event form - agenda
			'&.text-only': {
				width: 'auto',
				lineHeight: '1.25rem',
				fontSize: '0.875rem',
				border: 'none',
				backgroundColor: 'transparent',
				'&:hover': {
					background: COLORS.WHITE,
				},
				'& .MuiSvgIcon-root': {
					width: '1.5rem',
					height: '1.5rem',
				},
				'&.decline-notification': {
					width: '99px',
					'&:hover': {
						background: 'transparent',
					},
					'&.declined': {
					width: '99px',
					background: COLORS.ERROR,
					}
				},
			},

			// [+] event form media uplaod
			'&.upload-button': {
				height: '2rem',
				background: COLORS.GRAY,
				width: 'auto',
				border: `1px solid ${COLORS.GRAY_BORDER}`,
				fontSize: '0.875rem',
				'&:hover': {
					background: COLORS.HOVER_LIGHT_GRAY,
				},
			},

			'&.remove-admin-button': {
				fontSize: '0.875rem',
			},
		},
	},
};

export default muiButtonOptions;
