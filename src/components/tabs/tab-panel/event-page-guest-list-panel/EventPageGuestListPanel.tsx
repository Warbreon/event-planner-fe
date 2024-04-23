import React, {FC} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Divider} from "@mui/material";
import {ICON_STYLES} from "../../../../themes/styles/Icon";
import SearchBar from "../../../app-bar/search-bar/SearchBar";
import {TEXTFIELD_STYLES} from "../../../../themes/styles/TextField";
import List from "@mui/material/List";
import EventPageGuestListItem from "../../../lists/guest-list/EventPageGuestListItem";
import GenericButton, {ButtonTypes, IconButton} from "../../../buttons/ButtonComponent";
import {BUTTON_STYLES} from "../../../../themes/styles/Button";
import {Attendee} from "../../../../models/Attendee";
import EventPageGuestListPanelVM from "./EventPageGuestListPanelVM";
import {LIST_ITEM_STYLES} from "../../../../themes/styles/ListItem";
import Typography from "@mui/material/Typography";
import {TYPOGRAPHY_STYLES} from "../../../../themes/styles/Typography";

type Props = {
    attendees: Attendee[];
}
const EventPageGuestListPanel: FC<Props> = ({attendees}) => {
    const { onPlusButtonClick, onInputChange, onConfirmClick, onDeclineClick} = EventPageGuestListPanelVM();
    return (
        <>
            <SearchBar
                styles={TEXTFIELD_STYLES.GUEST_SEARCH_BAR}
                placeholder={'Search for guest...'}
                onChange={onInputChange}>
                <SearchIcon className={ICON_STYLES.GUEST_SEARCH_BAR}/>
            </SearchBar>
            <List>
                {attendees.map((attendee,i,array) => [
                    <EventPageGuestListItem
                        key={attendee.user.id}
                        fullName={`${attendee.user.firstName}  ${attendee.user.lastName}`}
                        details={attendee.user.jobTitle}
                        image={attendee.user.imageUrl}
                        styles={LIST_ITEM_STYLES.GUEST_LIST_ITEM}>
                        <>
                            {!!attendee.registrationStatus &&
                                (attendee.registrationStatus === "PENDING" ?
                                    <>
                                        <GenericButton type={ButtonTypes.button} title='Decline' onClick={onDeclineClick}
                                                       styles={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_BORDERLESS}/>
                                        <GenericButton type={ButtonTypes.button} title='Confirm' onClick={onConfirmClick}
                                                       styles={BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL}/>
                                    </>:
                                        <Typography
                                            variant={'caption'}
                                            className={TYPOGRAPHY_STYLES.GUEST_REGISTRATION_STATUS}>
                                            {attendee.registrationStatus?.toLowerCase()}
                                        </Typography>
                                )
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