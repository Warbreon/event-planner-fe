import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment, TextField, TextFieldProps} from "@mui/material";
import {ICON_STYLES} from "../../../themes/styles/Icon";

type Props = TextFieldProps & {
    style: string;
    onChange?: () => void;
}
const SearchBar: React.FC<Props> = ({
    style,
    onChange,
    ...props
 }) => {
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon className={ICON_STYLES.GUEST_SEARCH_BAR}/>
                    </InputAdornment>
                ),
            }}
            className={style}
            onChange={onChange}
            {...props}
        />
    )
}

export default SearchBar;