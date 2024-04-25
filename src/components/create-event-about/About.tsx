import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {Input, FormControl} from '@mui/material';

import styles from './About.module.css';
import PageHeader from '../headers/page-headers/PageHeader';
import {FormatListBulleted, FormatListNumbered, FormatStrikethrough, InsertLink} from "@mui/icons-material";

export default function CustomizedDividers() {
    const [formats, setFormats] = useState<string[]>([]);
    const [text, setText] = useState<string>('');

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
        console.log(newFormats)
        setFormats(newFormats);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setText((prevText) => prevText + '\n• ');
        }

    };
    const applyFormatting = (formats: string[]) => {
        let style: any = {}; // Start with no styles

        // Apply formatting based on selected formats
        if (formats.includes('bold')) {
            style.fontWeight = 'bold';
        }
        if (formats.includes('italic')) {
            style.fontStyle = 'italic';
        }
        if (formats.includes('underlined')) {
            style.textDecoration = 'underline';
        }

        return style;
    };


    return (
        <div>
            <PageHeader text='About' subheader='Description'/>
            <div className={styles.border}>
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                        marginBottom: '20px',
                        borderLeft: 'none',
                        borderRight: 'none',
                    }}
                >
                    <ToggleButtonGroup
                        size='small'
                        value={formats}
                        onChange={handleFormat}
                        aria-label='text formatting'
                    >
                        <ToggleButton value='bold' aria-label='bold'>
                            <FormatBoldIcon/>
                        </ToggleButton>
                        <ToggleButton value='italic' aria-label='italic'>
                            <FormatItalicIcon/>
                        </ToggleButton>
                        <ToggleButton value='listUnordered' aria-label='listUnordered'>
                            <FormatListBulleted/>
                        </ToggleButton>
                        <ToggleButton value='listOrdered' aria-label='listOrdered'>
                            <FormatListNumbered/>
                        </ToggleButton>
                        <ToggleButton value='underlined' aria-label='underlined'>
                            <FormatUnderlinedIcon/>
                        </ToggleButton>
                        <ToggleButton value='strikethrough' aria-label='strikethrough'>
                            <FormatStrikethrough/>
                        </ToggleButton>
                        <ToggleButton value='link' aria-label='link'>
                            <InsertLink/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Paper>
                <div className={styles.container}>
                    <FormControl fullWidth className={styles.customFormControl}>
                        <Input
                            id='my-input'
                            placeholder='Tell more details about the event and what will be happening during it'
                            autoFocus
                            multiline
                            value={text}
                            disableUnderline
                            maxRows={10}
                            onChange={handleTextChange}
                            onKeyDown={handleKeyDown}
                            sx={applyFormatting(formats)}
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    );
}
