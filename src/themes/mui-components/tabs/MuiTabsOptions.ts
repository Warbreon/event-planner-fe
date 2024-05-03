import { COLORS } from '../../styles/Colors';

const muiTabsOptions = {
	styleOverrides: {
		indicator: {
			backgroundColor: COLORS.BLACK,
			height: '3px',
		},
		root: {
			'&.create-event-price-tabs': {
				'& .MuiTab-root':{
					height: '32px',
					border: `1px solid ${COLORS.GRAY_BORDER}`,
				},
				'& .Mui-selected': {
					borderWidth: '10px',
					border: `1px solid ${COLORS.BLACK}`,
				},
				"& .MuiTabs-indicator": {
					display: 'none'
				},
			}
		},
	},
};

export default muiTabsOptions;
