import Title from '../title/Title';
import Dropdown from '../dropdown/Dropdown';
import GenericButton from '../button/GenericButton';
import ChipSelector from '../chip-selector/ChipSelector';
import styles from './EventHeader.module.css';
import { Add, KeyboardArrowDown } from '@mui/icons-material';
import { EventFiltersState } from '../../pages/explore-events/eventFiltersInterface';
import { DATE_FILTER_OPTIONS } from '../../constants/DateConstants';
import { FC } from 'react';
import EventHeaderVM from './EventHeaderVM';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';

interface Props {
	filters: EventFiltersState;
	handleFiltersChange: (filters: Partial<EventFiltersState>) => void;
}

const EventHeader: FC<Props> = ({ filters, handleFiltersChange }) => {

	const { userName, handleTagChange, handleDateChange, handleLocationChange, getChipClassName, locations, modifiedEventTags, error, isLoading, navigateToAddEvent } = 
		EventHeaderVM(filters, handleFiltersChange);

	if (error) return <div className={styles.container}>{error}</div>;
	if (isLoading) return <LoadingIndicator />;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Title
					text={`Hey, ${userName}`}
					subtext='Discover what’s happening in Cognizant in the upcoming months'
					titleClassName={styles.headerTitle}
					subtitleClassName={styles.headerSubtitle}
				/>
				<GenericButton
					text='Add event'
					onClick={navigateToAddEvent}
					className={styles.addEventButton}
					buttonProps={{
						startIcon: <Add />,
					}}
				/>
			</div>
			<div className={styles.filters}>
				<ChipSelector
					options={modifiedEventTags || []}
					selectedKeys={filters.eventTag}
					onSelect={handleTagChange}
					getChipClassName={getChipClassName}
				/>
				<div className={styles.dropdownFiltersContainer}>
				<Dropdown
						value={filters.date}
						onChange={handleDateChange}
						options={DATE_FILTER_OPTIONS}
						selectClassName='event-header-dropdown'
						selectProps={{
							IconComponent: KeyboardArrowDown,
						}}
					/>
					<Dropdown
						value={filters.location}
						onChange={handleLocationChange}
						options={locations}
						selectClassName='event-header-dropdown'
						selectProps={{
							IconComponent: KeyboardArrowDown,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default EventHeader;
