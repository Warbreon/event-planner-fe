import React from 'react'
import {ListItemAvatar, ListItemText, TextField} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import GenericButton, {ButtonTypes} from "../buttons/ButtonComponent";
import {BUTTON_STYLES} from "../../themes/styles/button";
import {TEXTFIELD_STYLES} from "../../themes/styles/textField";
type Props = {
    image?: string;
    fullName?: string;
    jobTitle?: string;
    registrationStatus?: string;
    isEventOpen: boolean;
};

const GuestListItem: React.FC<Props> = ({
    image,
    fullName,
    jobTitle,
    registrationStatus,
    isEventOpen
}) => {
    return (
        <div>
            <ListItem disablePadding>
                <ListItemAvatar>
                    <Avatar alt={fullName} src={image}/>
                </ListItemAvatar>
                <ListItemText
                    primary={fullName}
                    secondary={jobTitle}
                />
                {!isEventOpen ?
                    (registrationStatus==="PENDING" || registrationStatus==='' ?
                        <>
                            <GenericButton type={ButtonTypes.submit} title='Decline'
                                           style={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_BORDERLESS} />
                            <GenericButton type={ButtonTypes.submit} title='Confirm'
                                           style={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL} />
                        </>
                        : <TextField disabled={true} className={TEXTFIELD_STYLES.GUEST_REGISTRATION_STATUS}
                                       placeholder={registrationStatus?.toLowerCase()}/>
                    )
                    : null
                }
            </ListItem>
        </div>
)
};

export default GuestListItem;
