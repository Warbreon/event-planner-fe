import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Divider, TextField, TextFieldProps} from "@mui/material";
import {ICON_STYLES} from "../../../../themes/styles/Icon";
import SearchBar from "../../../app-bar/guest-search-bar/SearchBar";
import {TEXTFIELD_STYLES} from "../../../../themes/styles/TextField";
import List from "@mui/material/List";
import EventPageGuestListItem from "../../../lists/guest-list/EventPageGuestListItem";
import GenericButton, {ButtonTypes, IconButton} from "../../../buttons/ButtonComponent";
import {BUTTON_STYLES} from "../../../../themes/styles/Button";
import {Attendee} from "../../../../models/Attendee";
import EventPageGuestListPanelVM from "./EventPageGuestListPanelVM";

type Props = TextFieldProps & {
    attendees: Attendee[];
}
const EventPageGuestListPanel: React.FC<Props> = ({attendees}) => {
    const { onPlusButtonClick, onSearchChange, onConfirmClick, onDeclineClick} = EventPageGuestListPanelVM();
    return (
        <>
            <SearchBar
                styles={TEXTFIELD_STYLES.GUEST_SEARCH_BAR}
                placeholder={'Search for guest...'}
                onChange={onSearchChange}>
                <SearchIcon className={ICON_STYLES.GUEST_SEARCH_BAR}/>
            </SearchBar>
            <List>
                {attendees.map((attendee,i,array) => [
                    <EventPageGuestListItem
                        key={attendee.user.id}
                        fullName={`${attendee.user.firstName}  ${attendee.user.lastName}`}
                        details={attendee.user.jobTitle}
                        image={attendee.user.imageUrl}>
                        <>
                            {!!attendee.registrationStatus ?
                                (attendee.registrationStatus === "PENDING" ?
                                        <>
                                            <GenericButton type={ButtonTypes.button} title='Decline' onClick={onDeclineClick}
                                                           styles={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_BORDERLESS}/>
                                            <GenericButton type={ButtonTypes.button} title='Confirm' onClick={onConfirmClick}
                                                           styles={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL}/>
                                        </>
                                        : <TextField disabled={true} className={TEXTFIELD_STYLES.GUEST_REGISTRATION_STATUS}
                                                     placeholder={attendee.registrationStatus?.toLowerCase()}/>
                                )
                                : null
                            }
                        </>
                    </EventPageGuestListItem>,
                    array.length-1 !== i ? <Divider component="li" key={'Divider'+ i}/> : null
                ])}
            </List>
            <GenericButton icon={IconButton.ADD_GUESTS} type={ButtonTypes.button}
                           styles={BUTTON_STYLES.LIGHT_GRAY_BOX} onClick={onPlusButtonClick}/>
        </>
    )
}

export default EventPageGuestListPanel;