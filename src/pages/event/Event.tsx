import { Container, Grid, Box } from '@mui/material';
import styles from './Event.module.css';

const Event = () => {
	return (
		<Container className={styles.eventContainer}>
			<p className={styles.breadcrumb}>Breadcrumb</p>
			<Grid container spacing={2} className={styles.gridContainer}>
				<Grid item xs={9} className={styles.gridItem}>
					<Box component='section' className={styles.desciption}>
						<h2>Here goes:</h2>
						<p>Event Header</p>
						<p>Event cover photo</p>
						<p>Tabs with guest and descriptions</p>
						<p>Who's attending section</p>
					</Box>
				</Grid>
				<Grid item xs={3} className={styles.gridItem}>
					<Box component='section' className={styles.details}>
						<h3>Here goes:</h3>
						<p>Event date</p>
						<p>Event time</p>
						<p>Location</p>
						<p>Price</p>
						<p>Register button</p>
					</Box>
				</Grid>
			</Grid>
			<Box component='section' className={styles.moreEventsLikeThis}>
				<h3>Here goes:</h3>
				<p>divider</p>
				<p>event cards</p>
			</Box>
		</Container>
	);
};

export default Event;
