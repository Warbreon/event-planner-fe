import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AgendaItem from './AgendaItem';

interface AgendaProps {
	agendaItems: string[];
}

const Agenda: React.FC<AgendaProps> = ({ agendaItems }) => {
	return (
		<>
			<Typography variant='h2'>Agenda</Typography>
			<Grid marginTop='20px' container spacing={1}>
				{agendaItems.map((agendaItem, index) => {
					const [time, agendaItemText] = agendaItem.split('-');
					return <AgendaItem time={time} text={agendaItemText} />;
				})}
			</Grid>
		</>
	);
};

export default Agenda;
