import { createTheme } from '@mui/material';
import { BUTTON_COLORS, INPUT_COLORS } from './Colors1';

const fontFamily = 'Inter'

const projectTheme = createTheme({
	typography: {
		fontFamily: fontFamily,
		h1: {
			fontSize: '2rem',
			fontWeight: 400,
			color: 'black',

			'&.event-header' : {
				marginBottom: '1rem',
				width: '70%',
			},

			'&.centered' : {
				whiteSpace: 'nowrap',
				textAlign: 'center'
			}
		},

		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			color: 'black',

			'&.centered' : {
				marginTop: '1rem',
				textAlign: 'center'
			},
		},

		body2: {
			fontSize: '1rem',
			fontWeight: 400,
			color: '#666666'
		},
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: BUTTON_COLORS.BLACK,
					background: BUTTON_COLORS.WHITE,
					fontFamily: fontFamily,
					textTransform: 'none',
					fontSize: '1rem',
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
						color: BUTTON_COLORS.WHITE,
						background: BUTTON_COLORS.BLACK,
						padding: '14px 32px',
						'&:hover': {
							background: BUTTON_COLORS.HOVER_BLACK,
						},
					},

					//register, get tickets, add guests,
					'&.gray': {
						background: BUTTON_COLORS.GRAY,
						'&:hover': {
							background: BUTTON_COLORS.HOVER_GRAY,
						},
					},

					//blue 'going' button
					'&.blue': {
						color: BUTTON_COLORS.TEXT_BLUE,
						background: BUTTON_COLORS.BLUE,
						'&:hover': {
							background: BUTTON_COLORS.HOVER_BLUE,
						},
					},

					//home page header active category
					//create event selected pricing, private/public registration
					'&.outlined-black-border': {
						height: '32px',
						border: '2px solid ' + BUTTON_COLORS.BLACK,
						'&:hover': {
							background: BUTTON_COLORS.HOVER_OUTLINED_BLACK,
						},
					},

					//home page header remaining categories
					'&.outlined-gray-regular-text': {
						fontWeight: '400',
						height: '32px',
						border: '1px solid ' + BUTTON_COLORS.OUTLINED_GRAY_BORDER,
						'&:hover': {
							background: BUTTON_COLORS.HOVER_OUTLINED_GRAY_BORDER,
						},
					},

					//edit button in my events
					//add guests in event page header
					//cancel button
					'&.outlined-gray-border': {
						height: '36px',
						border: '1px solid ' + BUTTON_COLORS.OUTLINED_GRAY_BORDER,
						'&:hover': {
							background: BUTTON_COLORS.HOVER_OUTLINED_GRAY_BORDER,
						},
					},

					// [+] button in event guests section
					// [+] button in my event created by me
					'&.light-gray': {
						borderRadius: '12px',
						background: BUTTON_COLORS.LIGHT_GRAY,
						'&:hover': {
							background: BUTTON_COLORS.HOVER_LIGHT_GRAY,
						},
					},
				},
			},
		},

		MuiTab: {
			styleOverrides: {
				root: {
					color: 'black',
					fontFamily: fontFamily,
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: '400',
					borderRadius: '100px',
					'&.Mui-selected': {
						fontWeight: '600',
						color: 'black',
					},
					'&:hover': {
						background: '#ebebeb',
					},
					'&:active': {
						'& .MuiTouchRipple-root': {
							display: 'none',
						},
					},
				},
			},
		},

		MuiTabs: {
			styleOverrides: {
				indicator: {
					backgroundColor: 'black',
					height: '3px',
				},
				
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					fontFamily: fontFamily,
				
					fontSize: '1rem',
					color: 'black',
					borderRadius: '8px',
					borderWidth: '1px',
					height: '40px',
					'&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: INPUT_COLORS.GRAY_BORDER,
						borderWidth: '2px',
					},
					'&.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: INPUT_COLORS.ERROR,
					},
					'& input::placeholder': {
						color: INPUT_COLORS.PLACEHOLDER,
						fontWeight: 400,
					},
				},
			},
		},

		MuiTextField: {
			defaultProps: {
				InputLabelProps: {
					shrink: true,
				},
			},
			styleOverrides: {
				root: {
					width: '100%',
				}
			}
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontFamily: fontFamily,
				},
			},
		},
		MuiCardMedia: {
			styleOverrides: {
				img: {
					borderRadius: '12px',
					height: '320px',
					border: '1px solid #DDDDDD',

					'&.my-events': {
						width: '200px',
						height: '156px',
					},
					'&.event-card': {
						width: '276px',
					},

					'&.event-page': {
						width: '100%',
						marginTop: '1rem',
						marginBottom: '2rem',
					},
				},
			},
		},


		MuiBreadcrumbs: {
			styleOverrides: {
				root: {
					marginBottom: '5rem'
				}
			}
		}
	},

});

export default projectTheme;
