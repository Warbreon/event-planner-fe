import React, {useState, useCallback} from "react";
import {LocationTypeInterface} from "./locationTypeInterface";

const useLocationVM = () => {
    const [locationFilters, setLocationFilters] = useState<LocationTypeInterface>({
        type: 'physical'
    });
    const [searchText, setSearchText] = useState('');
    const [placeholder, setPlaceholder] = useState("Search for a venue...");

    const handleLocationFiltersChange = useCallback((newLocationFilters: Partial<LocationTypeInterface>) => {
        setLocationFilters(prevLocationFilters => ({...prevLocationFilters, ...newLocationFilters}));
    }, []);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setSearchText(event.target.value || '');
    };

    return {
        locationFilters,
        handleLocationFiltersChange,
        searchText,
        handleSearchInputChange,
        placeholder
    };
};

export default useLocationVM;
