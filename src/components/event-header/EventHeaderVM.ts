import { useNavigate } from "react-router"
import { useFetch } from "../../api/hooks/ApiHooks";
import { fetchAllTags } from "../../api/EventApi";
import { EventFiltersState } from "../../pages/explore-events/eventFiltersInterface";
import { SelectChangeEvent } from "@mui/material";
import ROUTES from "../../routes/Routes";

const EventHeaderVM = (filters: EventFiltersState, handleFiltersChange: (filters: Partial<EventFiltersState>) => void) => {
    const navigate = useNavigate();

    // TODO: get name from redux later
    const userName = 'John';

    const { data: eventTags, error, isLoading } = useFetch(fetchAllTags);

    const locations = [
		{ value: 'all', label: 'All Locations' },
		{ value: 'online', label: 'Online' },
		{ value: 'kaunas', label: 'Kaunas' },
		{ value: 'vilnius', label: 'Vilnius' },
		{ value: 'chicago', label: 'Chicago' },
	];

	const handleTagChange = (key: number) => {
		const newSelection = filters.eventTag.includes(key) ? filters.eventTag.filter(k => k !== key) : [...filters.eventTag, key];
		handleFiltersChange({ eventTag: newSelection });
	};

	const handleDateChange = (event: SelectChangeEvent<string>) => {
		handleFiltersChange({ date: event.target.value });
	};

	const handleLocationChange = (event: SelectChangeEvent<string>) => {
		handleFiltersChange({ location: event.target.value });
	};

    return {
        userName,
        handleTagChange,
        handleDateChange,
        handleLocationChange,
        locations,
        eventTags,
        error,
        isLoading,
        navigateToAddEvent: () => navigate(ROUTES.ADD_EVENT)
    }
}

export default EventHeaderVM;