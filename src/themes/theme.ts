import { createTheme } from '@mui/material';
import { BUTTON_COLORS, INPUT_COLORS } from './colors';
import { KeyboardArrowDown } from '@mui/icons-material';

const fontFamily = 'Inter'

const projectTheme = createTheme({
	typography: {
		fontFamily: fontFamily,
		h1: {
			fontSize: '2rem',
			fontWeight: 400,
		},
		h2: {
			fontSize: '1.25rem',
			fontWeight: 400,
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
			'&.gray-font': {
				color: '#666666',
			},
			paddingTop: '0.5rem',
			paddingBottom: '0.5rem',
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
					},
					'&:hover': {
						background: '#ebebeb',
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
					'&.hello-world': {
						fontSize: '14px',
						fontHeigth: '16px',
						fontColor: '#666666'
					}
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

		MuiSelect: {
			styleOverrides: {
			  root: {
				width: "100%",
				color: "black",
				borderRadius: "8px",
				fontFamily: "Inter",
				borderColor: "#DDDDDD",
				"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
				  borderColor: "#DDDDDD",
				},
				".MuiSelect-icon": {
				  color: "black",
				  marginRight: "1rem",
				},
				"&.hello-world": {
				  fontWeight: 600,
				  minWidth: '100px',
				  '.MuiOutlinedInput-notchedOutline': {
					  borderColor: 'white',
				  },
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
				width: "100%",
				"&:hover": {
				  backgroundColor: "#eeeeee",
				},
				"&.Mui-focusVisible": {
				  backgroundColor: "#DDDDDD",
				},
				"&.Mui-selected": {
				  backgroundColor: "#DDDDDD",
				},
				fontFamily: "Inter",
				borderRadius: "10px",
			  },
			},
		  },
		  MuiMenu: {
			styleOverrides: {
			  paper: {
				borderRadius: "8px",
				boxShadow: "0.5px 0.5px 10px 0.5px #DDDDDD",
			  },
			},
		  },
	},
});

export default projectTheme;
