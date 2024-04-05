import { FC } from "react";
import { IEvent } from "./EventCardInterfaces";
import styles from "./EventCard.module.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { formatDateAndTime } from "./formatDateAndTime";

export const EventCard: FC<IEvent> = ({ name, imageUrl, address, price, eventStart }) => {

  const eventDate = formatDateAndTime(eventStart);
  const eventCity = address ? address[0].city : 'Online';
  const displayPrice = price ? `$${price.toFixed(2)}` : null;

  const details = `${eventDate} • ${eventCity}${displayPrice ? ` • ${displayPrice}` : ''}`;

  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <CardMedia
          className={styles.media}
          image={imageUrl}
          title={name}
        />
        <CardContent className={styles.content}>
          <Typography component="span" className={styles.details}>
            {details}
          </Typography>
          <Typography className={styles.name} variant="h6">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};