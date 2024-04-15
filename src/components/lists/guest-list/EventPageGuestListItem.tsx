import {ListItemAvatar, ListItemText} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import {ReactNode} from "react";

type Props = {
    image?: string;
    fullName?: string;
    details?: string;
    styles?: string;
    children?: ReactNode;
};

const EventPageGuestListItem: React.FC<Props> = ({
    image,
    fullName,
    details,
    styles,
    children
}) => {
    return (
        <ListItem disablePadding className={styles}>
            <ListItemAvatar>
                <Avatar alt={fullName} src={image}/>
            </ListItemAvatar>
            <ListItemText
                primary={fullName}
                secondary={details}
            />
            {children}
        </ListItem>
    )
};

export default EventPageGuestListItem;