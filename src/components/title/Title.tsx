import { Typography } from '@mui/material';
import React from 'react';

interface Props {
    text: string;
    subtext?: string;
    typographyTitleProps?: React.ComponentProps<typeof Typography>;
    typographySubtitleProps?: React.ComponentProps<typeof Typography>;
    titleClassName?: string;
    subtitleClassName?: string;
}

const Title: React.FC<Props> = ({
    text,
    subtext,
    typographyTitleProps,
    typographySubtitleProps,
    titleClassName,
    subtitleClassName,
}) => (
    <>
        <Typography {...typographyTitleProps} className={titleClassName}>
            {text}
        </Typography>
        {subtext && (
            <Typography
                {...typographySubtitleProps}
                className={subtitleClassName}
            >
                {subtext}
            </Typography>
        )}
    </>
);

export default Title;