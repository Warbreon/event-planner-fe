import { COLORS } from '../../styles/Colors';

const tableOptions = {
	styleOverrides: {
		root: {
			marginTop: '1.5rem',
			marginBottom: '0.75rem',
			'& .MuiTableCell-head': {
				backgroundColor: COLORS.LIGHT_GRAY,
				paddingTop: 0,
				paddingBottom: 0,
				height: '2.5rem',
				borderBottom: 0,
				'&.user-column': {
					width: '60%',
					borderRadius: '12px 0 0 12px',
				},
				'&.permission-column': {
					width: '40%',
					borderRadius: '0 12px 12px 0',
				},
			},
			'& .admin-table-row': {
				borderBottom: COLORS.GRAY_BORDER,
			},
			'& .permission-container': {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: '0.875rem',
			},
		},
	},
};

export default tableOptions;
