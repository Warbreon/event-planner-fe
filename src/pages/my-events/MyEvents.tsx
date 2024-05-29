import { Box, Container } from '@mui/material';
import styles from './MyEvents.module.css';
import PageHeader from '../../components/headers/page-headers/PageHeader';
import GenericButton, { ButtonTypes, IconButton } from '../../shared/components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import useMyEventsVM from './MyEventsVM';
import ChipSelector from '../../components/chip-selector/ChipSelector';
import EventList from './event-list/EventList';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import ErrorAlert from '../../components/error/ErrorAlert';

const MyEvents = () => {
	const {
		subheader,
		isAdmin,
		currentTab,
		chipOptions,
		userEventList,
		createdByUserList,
		isLoadingUserEvents,
		isLoadingCreatedByUser,
		error,
		handleTabChange,
		getChipClassName,
		onAddEventClick,
	} = useMyEventsVM();

	if (isLoadingUserEvents || isLoadingCreatedByUser) return <LoadingIndicator />;

	return (
		<Container className={styles.myEventsPageContainer}>
			{error ? <ErrorAlert message={error} />
			:
			<>
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

				{currentTab === 0 && <EventList events={userEventList} />}
				{currentTab === 1 && (
					<EventList events={createdByUserList} createdByUser={true} onAddEventClick={onAddEventClick} />
				)}
			</>
			}
		</Container>
	);
};

export default MyEvents;
