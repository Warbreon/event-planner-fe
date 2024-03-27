import React from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './EventSearchBar.css';

type SearchBarProps = {
	searchValue: string;
	handleSearchBarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearchKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	handleSearch: () => void;
};

const EventSearchBar: React.FC<SearchBarProps> = ({
	searchValue,
	handleSearchBarChange,
	handleSearchKeyDown,
	handleSearch,
}) => {
	return (
		<div>
			<FormControl fullWidth>
				<OutlinedInput
					id='event-search'
					className='event-search-input'
					type='text'
					placeholder='Search for event...'
					value={searchValue}
					onChange={handleSearchBarChange}
					onKeyDown={handleSearchKeyDown}
					startAdornment={
						<InputAdornment position='start'>
							<IconButton className='icon-button' onClick={handleSearch}>
								<SearchRoundedIcon />
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</div>
	);
};

export default EventSearchBar;
