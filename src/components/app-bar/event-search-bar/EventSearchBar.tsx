import React from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton, Container } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from './EventSearchBar.module.css';

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
		<Container className={styles.searchContainer}>
			<FormControl fullWidth>
				<OutlinedInput
					className={styles.searchEventInput}
					type='text'
					placeholder='Search for events....'
					value={searchValue}
					onChange={handleSearchBarChange}
					onKeyDown={handleSearchKeyDown}
					startAdornment={
						<InputAdornment position='start'>
							<IconButton className={styles.iconButton} onClick={handleSearch}>
								<SearchRoundedIcon />
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</Container>
	);
};

export default EventSearchBar;
