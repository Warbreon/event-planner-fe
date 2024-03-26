import React, { useState } from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './EventSearchBar.css';

const EventSearchBar = () => {
	const [value, setValue] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<FormControl fullWidth>
				<OutlinedInput
					id='event-search'
					className='event-search-input'
					type='text'
					placeholder='Search for event...'
					value={value}
					onChange={handleChange}
					startAdornment={
						<InputAdornment position='start'>
							<IconButton className='icon-button'>
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
