import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import Title from '../title/Title';
import { RootState } from '../../redux/reducers/rootReducer';
import { useNavigate } from 'react-router';
import Dropdown from '../dropdown/Dropdown';
import { setDateFilter, setLocationFilter, setTagFilter } from '../../redux/actions/eventFiltersActions';
import GenericButton from '../button/GenericButton';
import ROUTES from '../../routes/routes';
import ChipSelector from '../chip-selector/ChipSelector';
import './EventHeader.css';
import { SelectChangeEvent } from '@mui/material';



const EventHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { date, location, eventTag } = useSelector((state: RootState) => state.eventFilters);
    //const addresses = useSelector((state: RootState) => state.address.list);
    const userName = 'Lovely';//useSelector((state: RootState) => state.user.name);

    const eventTagsOptions = [
        { key: 'all', label: 'All events' },
        { key: 'news', label: 'News & Updates' },
        { key: 'meetup', label: 'Meetup' },
        { key: 'demo', label: 'Demo sessions' },
        { key: 'exhibition', label: 'Exhibition' },
        { key: 'party', label: 'Party' },
    ];

    const dates = [
        { value: 'year', label: 'This year' },
        { value: 'month', label: 'This month' },
        { value: 'week', label: 'This week' },
        { value: 'today', label: 'Today' },
    ];

    const handleDateChange = (event: SelectChangeEvent<string>) => {
        dispatch(setDateFilter(event.target.value));
    };

    const handleLocationChange = (event: SelectChangeEvent<string>) => {
        dispatch(setLocationFilter(event.target.value));
    };

    const handleTagChange = (key: string) => {
        dispatch(setTagFilter(key));
    };

    return (
        <div className='container'>
            <div className='header'>
                <div>
                    <Title
                        text={`Hey, ${userName}`}
                        subtext='Discover what’s happening in Cognizant in the upcoming months'
                        titleClassName='headerTitle'
                        subtitleClassName='headerSubtitle'
                    />
                </div>
                <GenericButton
                    text='Add event'
                    onClick={() => navigate(ROUTES.ADD_EVENT)}
                />
            </div>
            <div className='filters'>
                <ChipSelector
                    options={eventTagsOptions}
                    selectedKey={eventTag}
                    onSelect={handleTagChange}
                    chipClassName='tagFilter'
                />
                <div className='dropdownFilters'>
                    <Dropdown
                        value={date}
                        onChange={handleDateChange}
                        options={dates}
                    />
                    <Dropdown
                        value={location}
                        onChange={handleLocationChange}
                        options={dates}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventHeader;