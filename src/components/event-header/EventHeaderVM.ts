import { useNavigate } from "react-router"
import { useFetch } from "../../api/hooks/ApiHooks";
import { EventFiltersState } from "../../pages/explore-events/eventFiltersInterface";
import { SelectChangeEvent } from "@mui/material";
import ROUTES from "../../routes/Routes";
import classNames from "classnames";
import { TAGS } from "../../themes/styles/Tag";
import useTagAPI from "../../api/TagsAPI";

const EventHeaderVM = (filters: EventFiltersState, handleFiltersChange: (filters: Partial<EventFiltersState>) => void) => {
    const navigate = useNavigate();

    // TODO: get name from redux later
    const userName = 'John';

    const fetchAllTags = useTagAPI();
    const { data: eventTags, error, isLoading } = useFetch(fetchAllTags);
    const modifiedEventTags = [{
        id: 0,
        name: 'All events',
    }, ...(eventTags ? eventTags.map(tag => ({
        ...tag,
    })) : [])];

    const locations = [
		{ value: 'all', label: 'All Locations' },
		{ value: 'online', label: 'Online' },
		{ value: 'kaunas', label: 'Kaunas' },
		{ value: 'vilnius', label: 'Vilnius' },
		{ value: 'chicago', label: 'Chicago' },
	];

    const handleTagChange = (key: number) => {
        if (key === 0) {
            handleFiltersChange({ eventTag: [] });
        } else {
            const newSelection = filters.eventTag.includes(key) ? filters.eventTag.filter(k => k !== key) : [...filters.eventTag, key];
            handleFiltersChange({ eventTag: newSelection });
        }
    };

	const handleDateChange = (event: SelectChangeEvent<string>) => {
		handleFiltersChange({ date: event.target.value });
	};

	const handleLocationChange = (event: SelectChangeEvent<string>) => {
		handleFiltersChange({ location: event.target.value });
	};

    const getChipClassName = (isSelected: boolean) => {
		return classNames(TAGS.SELECT_TAG, { [TAGS.TAG_SELECTED]: isSelected });
	};

    const selectedKeys = filters.eventTag.length === 0 ? [0] : filters.eventTag;

    return {
        userName,
        handleTagChange,
        handleDateChange,
        handleLocationChange,
        getChipClassName,
        selectedKeys,
        locations,
        modifiedEventTags,
        error,
        isLoading,
        navigateToAddEvent: () => navigate(ROUTES.ADD_EVENT)
    }
}

export default EventHeaderVM;