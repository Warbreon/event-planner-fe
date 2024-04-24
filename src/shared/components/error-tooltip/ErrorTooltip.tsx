import { ErrorOutline } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";

interface Props {
    title: string | undefined;
    isVisible: boolean;
    children?: JSX.Element;
}

const ErrorTooltip: FC<Props> = ({ title, isVisible, children }) => {
    return (
        <>
            {isVisible && (
                <Tooltip classes={{ tooltip: 'error', tooltipArrow: 'error' }} title={title} placement="top" arrow>
                    {children || (
                        <IconButton aria-label="error" size="small">
                            <ErrorOutline color="error" />
                        </IconButton>
                    )}
                </Tooltip>)
            }
        </>
    );
}

export default ErrorTooltip