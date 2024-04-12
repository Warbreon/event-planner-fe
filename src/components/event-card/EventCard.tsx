import { FC } from "react";
import { CardEvent } from "./EventCardInterfaces";
import styles from "./EventCard.module.css";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "../image/Image";
import GuestList from "../guest-list/GuestList";
import GenericButton, { ButtonTypes, IconButton } from "../buttons/ButtonComponent";
import { BUTTON_STYLES } from "../../themes/styles/Button";
import { formatDateAndTime } from "./formatDateAndTime";
import DateLocationPrice from "../reusable-labels/DateLocationPrice";

export const EventCard: FC<CardEvent> = ({
  name,
  imageUrl,
  address,
  price,
  eventStart,
}) => {
  //date and time will be received as a string, not as a Date, i have already fixed it in fetch api branch
  const eventDate = formatDateAndTime(eventStart);
  const eventCity = address ? address[0].city : "Online";

  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <Image styles="event-card" imageUrl={imageUrl} />
        <CardContent className={styles.content}>
          <Box className={styles.dateLocationPrice}>
            <DateLocationPrice
              date={eventDate}
              location={eventCity}
              price={price}
            />
          </Box>
          <Typography
            variant="body1"
            className={styles.name}
            // className="event-card"
          >
            {name}
          </Typography>
          <GuestList />
          <GenericButton
            type={ButtonTypes.button}
            styles={BUTTON_STYLES.GRAY}
            icon={IconButton.REGISTER}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
