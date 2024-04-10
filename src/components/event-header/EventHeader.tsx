import Title from '../title/Title';
import { useNavigate } from 'react-router';
import Dropdown from '../dropdown/Dropdown';
import GenericButton from '../button/GenericButton';
import ROUTES from '../../routes/Routes';
import ChipSelector from '../chip-selector/ChipSelector';
import styles from './EventHeader.module.css';
import classNames from 'classnames';
import { Add, KeyboardArrowDown } from '@mui/icons-material';
import { EventFiltersState } from '../../pages/explore-events/eventFiltersInterface';
import { SelectChangeEvent } from '@mui/material';
import { DATE_FILTER_OPTIONS } from '../../constants/DateConstants';

interface Props {
	filters: EventFiltersState;
	handleFiltersChange: (filters: Partial<EventFiltersState>) => void;
}

const EventHeader: React.FC<Props> = ({ filters, handleFiltersChange }) => {
	const navigate = useNavigate();

	// TODO: get name from redux later
	const userName = 'John';

	const eventTagsOptions = [
		{ key: 'all', label: 'All events' },
		{ key: 'news', label: 'News & Updates' },
		{ key: 'meetup', label: 'Meetup' },
		{ key: 'demo', label: 'Demo sessions' },
		{ key: 'exhibition', label: 'Exhibition' },
		{ key: 'party', label: 'Party' },
	];

	const locations = [
		{ value: 'all', label: 'All Locations' },
		{ value: 'online', label: 'Online' },
		{ value: 'kaunas', label: 'Kaunas' },
		{ value: 'vilnius', label: 'Vilnius' },
		{ value: 'chicago', label: 'Chicago' },
	];

	const getChipClassName = (isSelected: boolean) => {
		return classNames(styles.tagFilter, { [styles.tagFilterSelected]: isSelected });
	};

	const handleTagChange = (key: string) => {
		handleFiltersChange({ eventTag: key });
	};

	const handleDateChange = (event: SelectChangeEvent<string>) => {
		handleFiltersChange({ date: event.target.value });
	};

	const handleLocationChange = (event: SelectChangeEvent<string>) => {
		handleFiltersChange({ location: event.target.value });
	};

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
					onClick={() => navigate(ROUTES.ADD_EVENT)}
					className={styles.addEventButton}
					buttonProps={{
						startIcon: <Add />,
					}}
				/>
			</div>
			<div className={styles.filters}>
				<ChipSelector
					options={eventTagsOptions}
					selectedKey={filters.eventTag}
					onSelect={handleTagChange}
					getChipClassName={getChipClassName}
				/>
				<div className={styles.dropdownFiltersContainer}>
					<Dropdown
						value={filters.date}
						onChange={handleDateChange}
						options={DATE_FILTER_OPTIONS}
						selectClassName={styles.dropdown}
						menuItemClassName={styles.dropdownMenuItem}
						selectProps={{
							IconComponent: KeyboardArrowDown,
						}}
					/>
					<Dropdown
						value={filters.location}
						onChange={handleLocationChange}
						options={locations}
						selectClassName={styles.dropdown}
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
