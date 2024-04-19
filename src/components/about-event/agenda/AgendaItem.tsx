import { Grid, Typography } from '@mui/material';

interface AgendaItemProps {
	time: string;
	text: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ time, text }) => {
	return (
		<Grid marginBottom='12px' item xs={12}>
			<Grid className='agendaGrid' container spacing={2}>
				<Grid item xs={2}>
					<Typography variant='body1'>{time}</Typography>
				</Grid>
				<Grid item xs={10}>
					<Typography variant='body1'>{text}</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AgendaItem;
