import { createTheme } from '@mui/material';

const projectTheme = createTheme({
	palette: {
		text: {
			primary: '#000000',
			secondary: '#FFFFFF',
		},
	},

	typography: {
		fontFamily: 'Inter',
	},

	components: {
		MuiButton: {
			defaultProps: {
				disableFocusRipple: true,
			},
			styleOverrides: {
				root: {
					color: 'black',
					background: 'white',
					fontFamily: 'Inter',
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: '600',
					borderRadius: '100px',
					boxShadow: 'none',
					'&:hover': {
						boxShadow: 'none',
					},
				},

				//black button used in sign in, password reset,
				//home page - add event and load more
				containedPrimary: {
					height: '44px',
					color: 'white',
					background: 'black',
					'&:hover': {
						background: '#404040',
					},
				},

				//register, get tickets, add guests,
				containedSecondary: {
					background: '#F4F4F4',
					'&:hover': {
						background: 'dark',
					},
				},

				//blue 'going' button
				containedInfo: {
					color: '#003FE1',
					background: '#003FE126',
					'&:hover': {
						background: '#003FE135',
					},
				},

				// + button in event guests section
				// + button in my event created by me
				contained: {
					background: '#F7F7F7',
					'&:hover': {
						background: '#E3E3E3',
					},
				},

				//home page header active category
				//create event selected pricing, private/public registration
				outlinedPrimary: {
					height: '32px',
					borderColor: 'black',
					borderWidth: '1px',
					'&:hover': {
						background: '#c9c9c9',
					},
				},

				//edit button in my events
				//add guests in event page header
				//cancel button
				outlinedSecondary: {
					height: '36px',
					borderColor: '#DDDDDD',
					borderWidth: '1px',
					'&:hover': {
						background: '#f2f0f0',
					},
				},

				//home page header remaining categories
				outlined: {
					height: '32px',
					fontWeight: '400',
					borderColor: '#DDDDDD',
					borderWidth: '1px',
					'&:hover': {
						background: '#f2f0f0',
					},
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					color: 'black',
					fontFamily: 'Inter',
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
					fontFamily: 'Inter',
					fontSize: '1rem',
					color: 'black',
					borderRadius: '8px',
					borderWidth: '1px',
					height: '40px',
					'&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#DDDDDD',
						borderWidth: '2px',
					},
					'&.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: '#FF5252',
					},
					'& input::placeholder': {
						color: '#999999',
						fontWeight: 400,
					},
				},
			},
		},

		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiFormHelperText-root': {
						fontSize: '1rem',
						fontFamily: 'Inter',
						color: '#FF5252',
					},
				},
			},
		},
	},
});

export default projectTheme;
