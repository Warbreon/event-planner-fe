import React, {ReactNode} from 'react'
import {InputAdornment, TextField, TextFieldProps} from "@mui/material";

type Props = TextFieldProps & {
    styles: string;
    children?: ReactNode;
}
const SearchBar: React.FC<Props> = ({
    styles,
    children,
    ...props
 }) => {
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {children}
                    </InputAdornment>
                ),
            }}
            className={styles}
            {...props}
        />
    )
}

export default SearchBar;