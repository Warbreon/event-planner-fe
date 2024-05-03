import { Box, Container } from '@mui/material';
import styles from './MyEvents.module.css';
import PageHeader from '../../components/headers/page-headers/PageHeader';
import GenericButton, { ButtonTypes, IconButton } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import useMyEventsVM from './MyEventsVM';
import ChipSelector from '../../components/chip-selector/ChipSelector';
import EventList from './EventList';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';

const MyEvents = () => {
	const {
		isAdmin,
		subheader,
		currentTab,
		eventsAttending,
		eventsCreated,
		chipOptions,
		isLoading,
		error,
		handleTabChange,
		getChipClassName,
		onAddEventClick,
	} = useMyEventsVM();

	if (error)
		return <Container className={styles.myEventsPageContainer}>Something went wrong. Could not fetch event list...</Container>;

	if (isLoading) return <LoadingIndicator />;

	return (
		<Container className={styles.myEventsPageContainer}>
			<Box className={styles.pageHeader}>
				<PageHeader text='My events' subheader={subheader} />
				{isAdmin && (
					<GenericButton
						icon={IconButton.ADD_EVENT}
						type={ButtonTypes.button}
						styles={BUTTON_STYLES.BLACK}
						onClick={onAddEventClick}
					/>
				)}
			</Box>
			{isAdmin && (
				<ChipSelector
					options={chipOptions}
					selectedKeys={currentTab}
					onSelect={handleTabChange}
					getChipClassName={getChipClassName}
					multiple={false}
				/>
			)}

			{currentTab === 0 && <EventList events={eventsAttending}/>}
			{currentTab === 1 && <EventList events={eventsCreated} createdByUser={true} onAddEventClick={onAddEventClick}/>}

		</Container>
	);
};

export default MyEvents;
