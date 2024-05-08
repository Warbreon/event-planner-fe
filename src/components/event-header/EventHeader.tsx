import Title from '../title/Title';
import Dropdown from '../dropdown/Dropdown';
import GenericButton, { ButtonTypes, IconButton } from '../buttons/ButtonComponent';
import ChipSelector from '../chip-selector/ChipSelector';
import styles from './EventHeader.module.css';
import { KeyboardArrowDown } from '@mui/icons-material';
import { DATE_FILTER_OPTIONS } from '../../constants/DateConstants';
import { FC } from 'react';
import EventHeaderVM from './EventHeaderVM';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';

const EventHeader: FC = () => {

	const { userName, filters, handleTagChange, handleDateChange, handleLocationChange, getChipClassName, selectedKeys, modifiedCities, modifiedEventTags, tagsError, tagsLoading, citiesError, citiesLoading, navigateToAddEvent } = 
		EventHeaderVM();

	if (tagsError || citiesError) return <div className={styles.container}>{tagsError || citiesError}</div>;
	if (tagsLoading || citiesLoading) return <LoadingIndicator />;

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
					title='Add event'
					onClick={navigateToAddEvent}
					styles={styles.addEventButton}
					icon={IconButton.ADD_EVENT}
					type={ButtonTypes.button}
				/>
			</div>
			<div className={styles.filters}>
				<ChipSelector
					options={modifiedEventTags || []}
					selectedKeys={selectedKeys}
					onSelect={handleTagChange}
					getChipClassName={getChipClassName}
					multiple={true}
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
						options={modifiedCities}
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
