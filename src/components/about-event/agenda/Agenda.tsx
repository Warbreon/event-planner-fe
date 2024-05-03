import React from 'react';
import Grid from '@mui/material/Grid';
import AgendaItem from './AgendaItem';
import SectionHeader from '../../../shared/components/section-header/SectionHeader';

interface AgendaProps {
	agendaItems: string[];
}

const Agenda: React.FC<AgendaProps> = ({ agendaItems }) => {
	return (
		<>
			<SectionHeader name='Agenda' />
			<Grid marginTop='20px' container spacing={1}>
				{agendaItems.map((agendaItem, index) => {
					const [time, agendaItemText] = agendaItem.split('-');
					return <AgendaItem key={index} time={time} text={agendaItemText} />;
				})}
			</Grid>
		</>
	);
};

export default Agenda;
