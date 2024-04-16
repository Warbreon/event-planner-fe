import { createTheme } from '@mui/material';
import { COLORS } from './Colors';
import { KeyboardArrowDown } from '@mui/icons-material';

const fontFamily = 'Inter'

const projectTheme = createTheme({
	palette: {
		primary: {
			main: COLORS.BLACK,
		},
	},

	typography: {
		fontFamily: fontFamily,
		h1: {
			fontSize: '2rem',
			fontWeight: 400,
			color: COLORS.BLACK,

			'&.event-header' : {
				marginBottom: '1rem',
				width: '70%',
			},

			'&.centered' : {
				whiteSpace: 'nowrap',
				textAlign: 'center'
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
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			color: COLORS.BLACK,

			'&.centered' : {
				marginTop: '1rem',
				textAlign: 'center'
			},
			'&.gray-font': {
				color: '#666666',
			},
			paddingTop: '0.5rem',
			paddingBottom: '0.5rem',
		},
		body2: {
			fontSize: '0.875rem',
			fontWeight: 400,
			color: COLORS.MEDIUM_DARK_GRAY
		},

		subtitle1: {
			'&.event-form-element': {
				fontWeight: 400,
				fontSize: '0.875rem',
				lineHeight: '1rem',
				color: COLORS.MEDIUM_DARK_GRAY,
				marginBottom: '0.5rem',
			}
		},
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: COLORS.BLACK,
					background: COLORS.WHITE,
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
						color: COLORS.WHITE,
						background: COLORS.BLACK,
						padding: '14px 32px',
						'&:hover': {
							background: COLORS.HOVER_BLACK,
						},
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

					// [+] button in event guests section
					// [+] button in my event created by me
					'&.light-gray': {
						borderRadius: '12px',
						background: COLORS.LIGHT_GRAY,
						'&:hover': {
							background: COLORS.HOVER_LIGHT_GRAY,
						},
					},
				},
			},
		},

		MuiTab: {
			styleOverrides: {
				root: {
					color: COLORS.BLACK,
					fontFamily: fontFamily,
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: '400',
					borderRadius: '100px',
					'&.Mui-selected': {
						fontWeight: '600',
						color: COLORS.BLACK,
					},
					'&:hover': {
						background: COLORS.VERY_LIGHT_GRAY,
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
					backgroundColor: COLORS.BLACK,
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
						borderColor: COLORS.GRAY_BORDER,
						borderWidth: '2px',
					},
					'&.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: COLORS.ERROR,
					},
					'& input::placeholder': {
						color: COLORS.PLACEHOLDER,
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

		MuiFormControl: {
			styleOverrides: {
				root: {
					'&.date-picker': {
						width: '15.25rem',
					},
					'&.time-picker-small': {
						width: '6.25rem',
					},
					'&.time-picker-big': {
						width: '7.5rem',
					},
				}
			}
		},

		MuiInputBase: {
			styleOverrides: {
				input: {
					'&.date-picker, &.time-picker-small , &.time-picker-big': {
						fontFamily: fontFamily,
						fontWeight: 400,
						fontSize: '0.875rem',
						lineHeight: '1rem',
					},
				},
			},
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
					width: '100%',
					border: `1px solid ${COLORS.BLACK}`,

					'&.my-events': {
						width: '200px',
						height: '156px',
					},

					'&.event-page': {
						width: '100%',
						marginTop: '1rem',
						marginBottom: '2rem',
					},
				},
			},
		},

		MuiCardContent: {
			styleOverrides: {
				root: {
					margin: '0',
					padding: '0',
				}
			}
		},

		MuiBreadcrumbs: {
			styleOverrides: {
				root: {
					marginBottom: '5rem'
				}
			}
		},
		MuiSelect: {
			styleOverrides: {
			  	root: {
					width: '100%',
					color: 'black',
					borderRadius: '8px',
					fontFamily: fontFamily,
					borderColor: COLORS.GRAY_BORDER,
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
				  		borderColor: "#DDDDDD",
					},
					'.MuiSelect-icon': {
				  		color: 'black',
				  		marginRight: '1rem',
					},
			  	},
			},
			defaultProps: {
			  IconComponent: KeyboardArrowDown,
			},
		},
		MuiMenuItem: {
			styleOverrides: {
			  	root: {
					width: '100%',
					'&:hover': {
				  		backgroundColor: '#eeeeee',
					},
					'&.Mui-focusVisible': {
				  		backgroundColor: COLORS.GRAY_BORDER,
					},
					'&.Mui-selected': {
				  		backgroundColor: COLORS.GRAY_BORDER,
					},
					fontFamily: fontFamily,
					borderRadius: '10px',
			  	},
			},
		},
		MuiMenu: {
			styleOverrides: {
			  	paper: {
					borderRadius: '8px',
					boxShadow: '0.5px 0.5px 10px 0.5px #DDDDDD',
			  	},
			},
		},
	},
});

export default projectTheme;
