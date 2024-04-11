import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface AgendaProps {
	agendaItems: string[];
}

const Agenda: React.FC<AgendaProps> = ({ agendaItems }) => {
	return (
		<>
			<Typography variant='h2'>Agenda</Typography>
			<Grid marginTop='20px' container spacing={1}>
				{agendaItems.map((agendaItem, index) => {
					const [date, agendaItemText] = agendaItem.split('-');
					return (
						<Grid marginBottom='12px' item xs={12} key={index}>
							<Grid className='agendaGrid' container spacing={2}>
								<Grid item xs={2}>
									<Typography variant='body1'>{date}</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography variant='body1'>{agendaItemText}</Typography>
								</Grid>
							</Grid>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default Agenda;
