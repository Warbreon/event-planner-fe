import React from 'react'
import {ListItemAvatar, ListItemText, TextField} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import GenericButton, {ButtonTypes} from "../../buttons/ButtonComponent";
import {BUTTON_STYLES} from "../../../themes/styles/Button";
import {TEXTFIELD_STYLES} from "../../../themes/styles/TextField";

type Props = {
    image?: string;
    fullName?: string;
    details?: string;
    registrationStatus?: string | null;
    onConfirm?: () => void;
    onDecline?: () => void;
};

const EventPageGuestListItem: React.FC<Props> = ({
    image,
    fullName,
    details,
    registrationStatus
}) => {
    const onConfirmClick = () => {
        (console.log("Confirmed"));
    };
    const onDeclineClick = () => {
        (console.log("Declined"));
    };
    return (
        <div>
            <ListItem disablePadding>
                <ListItemAvatar>
                    <Avatar alt={fullName} src={image}/>
                </ListItemAvatar>
                <ListItemText
                    primary={fullName}
                    secondary={details}
                />
                {!!registrationStatus ?
                    (registrationStatus === "PENDING" ?
                            <>
                                <GenericButton type={ButtonTypes.button} title='Decline' onClick={onConfirmClick}
                                               styles={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_BORDERLESS}/>
                                <GenericButton type={ButtonTypes.button} title='Confirm' onClick={onDeclineClick}
                                               styles={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL}/>
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

export default EventPageGuestListItem;