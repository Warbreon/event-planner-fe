import { createTheme } from '@mui/material';

export const eventRegistrationButtonTheme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					width: '300px',
					height: '40px',
					fontFamily: 'Inter',
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: '600',
					color: 'black',
					borderRadius: '100px',
					borderWidth: '1px',
					background: '#F4F4F4',
					'&:hover': {
						background: '#E3E3E3',
					},
				},
			},
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

export const eventGoingButtonTheme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					width: '300px',
					height: '40px',
					fontFamily: 'Inter',
					textTransform: 'none',
					fontSize: '1rem',
					fontWeight: '600',
					color: '#003FE1',
					borderRadius: '100px',
					borderWidth: '1px',
					background: '#003FE126',
					'&:hover': {
						background: '#003FE140',
					},
				},
			},
			
		},
	},
});

