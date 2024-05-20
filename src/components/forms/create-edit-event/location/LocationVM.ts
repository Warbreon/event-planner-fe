import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { TAGS } from '../../../../themes/styles/Tag';
import { EventFormValues } from '../../../../interfaces/EventFormValuesInterface';
import { LocationTags } from '../../../../constants/LocationTags';
import { AppDispatch } from '../../../../redux/store/Store';
import { useDispatch } from 'react-redux';
import { fetchVenues } from '../../../../redux/slices/VenueSlice';
import { useSelector } from 'react-redux';

interface Props {
	values: EventFormValues;
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

interface State {
	placeholder: string;
	locationKey: number;
}

const LocationVM = ({ values, setFieldValue }: Props) => {
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchVenues());
	}, [dispatch]);

	const { list: venues, error, isLoading } = useSelector((state: any) => state.venues);

	const [placeholder, setPlaceholder] = useState('Search for a venue...');
	const { setFieldTouched } = useFormikContext<EventFormValues>();
	const key = values.locationKey;

	const stateChanges: Record<number, State> = {
		[LocationTags.PHYSICAL]: {
			placeholder: 'Search for a venue...',
			locationKey: LocationTags.PHYSICAL,
		},
		[LocationTags.ONLINE]: {
			placeholder: 'Enter link to Zoom, Hangouts, or other platform',
			locationKey: LocationTags.ONLINE,
		},
		[LocationTags.TBD]: {
			placeholder: 'Enter TBD details...',
			locationKey: LocationTags.TBD,
		},
	};

	const handleTagChange = (newKey: number) => {
		const newState = stateChanges[newKey];

		setPlaceholder(newState.placeholder);
		setFieldValue('inviteUrl', '');
		setFieldValue('addressId', null);
		setFieldValue('locationKey', newState.locationKey);
		setFieldTouched('inviteUrl', false, false);
		setFieldTouched('addressId', false, false);
	};

	const options = [
		{ id: LocationTags.PHYSICAL, name: 'Physical location' },
		{ id: LocationTags.ONLINE, name: 'Online event' },
		{ id: LocationTags.TBD, name: 'TBD' },
	];

	const getChipClassName = (isSelected: boolean) => {
		return classNames(TAGS.SELECT_TAG, { [TAGS.TAG_SELECTED]: isSelected });
	};

	const locations = venues.map((venue) => {
		return {
			id: venue.id,
			name: `${venue.venueName}, ${venue.street} ${venue.building}, ${venue.city}`
		};
	});

	return { placeholder, key, getChipClassName, handleTagChange, options, locations, error, isLoading };
};

export default LocationVM;
