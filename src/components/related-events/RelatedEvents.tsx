
import { FC } from "react";
import { IconButton } from "../../shared/components/buttons/ButtonComponent"
import { EventCard } from "../event-card/EventCard"
import SectionHeader from "../../shared/components/section-header/SectionHeader"
import { Event } from "../../models/Event";
import RelatedEventsVM from "./RelatedEventsVM";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";
import styles from './RelatedEvents.module.css';
import { Divider } from "@mui/material";

const EVENTS_DISPLAY_COUNT = 4;

interface Props {
    event: Event | null;
}

const RelatedEvents: FC<Props> = ({ event }) => {
    const { relatedEvents, isLoading, error, handleViewAllEvents } = RelatedEventsVM({ event });

    if (error) return <div className={styles.container}>{error}</div>;
    if (isLoading) return <LoadingIndicator />;

    return (
        <div className={styles.container}>
            <Divider className={styles.divider} />
            <SectionHeader
                name='More events like this'
                buttonType={IconButton.VIEW_ALL_EVENTS}
                onButtonClick={handleViewAllEvents}
            />
            <div className={styles.eventsContainer}>
                {relatedEvents?.length! > 0 ? (
                    relatedEvents?.slice(0, EVENTS_DISPLAY_COUNT).map((event: Event) => (
                        <EventCard key={event.id} {...event} />
                    ))
                ) : (
                    <p>No related events to display.</p>
                )}
            </div>
        </div>
    )
}

export default RelatedEvents