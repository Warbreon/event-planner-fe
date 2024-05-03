import { useNavigate } from "react-router"
import { useFetch } from "../../api/hooks/ApiHooks";
import { SelectChangeEvent } from "@mui/material";
import ROUTES from "../../routes/Routes";
import classNames from "classnames";
import { TAGS } from "../../themes/styles/Tag";
import useTagAPI from "../../api/TagsAPI";
import useAddressAPI from "../../api/AddressAPI";
import { useDispatch, useSelector } from "react-redux";
import { setDate, setEventTags, setLocation } from "../../redux/slices/FiltersSlice";
import { StoreState } from "../../redux/store/Store";

const EventHeaderVM = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const filters = useSelector((state: StoreState) => state.filters);

    // TODO: get name from redux later
    const userName = 'John';

    const fetchAllTags = useTagAPI();
    const fetchAllCities = useAddressAPI();

    const { data: eventTags, error: tagsError, isLoading: tagsLoading } = useFetch(fetchAllTags);
    const { data: cities, error: citiesError, isLoading: citiesLoading } = useFetch(fetchAllCities);

    const modifiedEventTags = [{
        id: 0,
        name: 'All events',
    }, ...(eventTags ? eventTags.map(tag => ({
        ...tag,
    })) : [])];

    const modifiedCities = [
        { value: 'all', label: 'All Locations' },
        { value: 'online', label: 'Online' },
        ...(cities ? cities.map(city => (
            { value: city, label: city }
        )): [])];

    const handleTagChange = (key: number) => {
        if (key === 0) {
            dispatch(setEventTags([]));
        } else {
            const newSelection = filters.eventTag.includes(key) ? filters.eventTag.filter(k => k !== key) : [...filters.eventTag, key];
            dispatch(setEventTags(newSelection));
        }
    };

	const handleDateChange = (event: SelectChangeEvent<string>) => {
        dispatch(setDate(event.target.value));
	};

	const handleLocationChange = (event: SelectChangeEvent<string>) => {
        dispatch(setLocation(event.target.value));
	};

    const getChipClassName = (isSelected: boolean) => {
		return classNames(TAGS.SELECT_TAG, { [TAGS.TAG_SELECTED]: isSelected });
	};

    const selectedKeys = filters.eventTag.length === 0 ? [0] : filters.eventTag;

    return {
        userName,
        filters,
        handleTagChange,
        handleDateChange,
        handleLocationChange,
        getChipClassName,
        selectedKeys,
        modifiedCities,
        modifiedEventTags,
        tagsError,
        tagsLoading,
        citiesError,
        citiesLoading,
        navigateToAddEvent: () => navigate(ROUTES.ADD_EVENT)
    }
}

export default EventHeaderVM;