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

			//home page header active category
			//create event selected pricing, private/public registration
			'&.outlined-black-border': {
				height: '32px',
				border: '2px solid ' + COLORS.BLACK,
				'&:hover': {
					background: COLORS.HOVER_OUTLINED_BLACK,
				},
			},

			//home page header remaining categories
			'&.outlined-gray-regular-text': {
				fontWeight: '400',
				height: '32px',
				border: '1px solid ' + COLORS.GRAY_BORDER,
				'&:hover': {
					background: COLORS.HOVER_OUTLINED_GRAY_BORDER,
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

			// [+] button in my event created by me
			'&.light-gray': {
				borderRadius: '12px',
				background: COLORS.LIGHT_GRAY,
				'&:hover': {
					background: COLORS.HOVER_LIGHT_GRAY,
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
			// confirm button in event guests section
			'&.light-gray-round-small': {
				height: '32px',
				width: '103px',
				gap:'10px',
				padding: '8px 24px 8px 24px',
				borderRadius: '100px',
				border: '1px solid ' + COLORS.GRAY_BORDER,
				'&:hover': {
					background: COLORS.HOVER_LIGHT_GRAY,
				},
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
				}
			}
		}
	}
};

export default muiButtonOptions;
