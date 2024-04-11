import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { BUTTON_STYLES } from '../../../themes/styles/button';

import style from './Agenda.module.css';

interface AgendaProps {
	agendaItems: string[];
}

const Agenda: React.FC<AgendaProps> = ({ agendaItems }) => {
	return (
		<>
			<Box className={style.agendaHeader}>
				<h2>Agenda</h2>
				<Button className={BUTTON_STYLES.TEXT_ONLY} onClick={() => null} variant='text' disableRipple>
					<Typography fontWeight='bold'>View all guests</Typography>
					<KeyboardArrowRightRoundedIcon />
				</Button>
			</Box>
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
