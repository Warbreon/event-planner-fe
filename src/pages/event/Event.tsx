import {Container, Grid, Box, Divider} from '@mui/material';
import styles from './Event.module.css';
import SearchBar from "../../components/app-bar/guest-search-bar/SearchBar";
import List from "@mui/material/List";
import GuestListItem from "../../components/lists/GuestListItem";
import React from 'react';
import GenericButton from "../../components/buttons/ButtonComponent";
import {ButtonTypes, IconButton} from "../../components/buttons/ButtonComponent";
import {BUTTON_STYLES} from "../../themes/styles/button";
import {TEXTFIELD_STYLES} from "../../themes/styles/textField";


const Event = () => {
	return (
		<Container className={styles.eventContainer}>
			<p className={styles.breadcrumb}>Breadcrumb</p>
			<Grid container spacing={2} className={styles.gridContainer}>
				<Grid item xs={9} className={styles.gridItem}>
                  <Box component='section' className={styles.desciption}>
                    <h2>Here goes:</h2>
                    <p>Event Header</p>
                    <p>Event cover photo</p>
                    <p>Tabs with guest and descriptions</p>
                    <div>

                      <SearchBar
                          style={TEXTFIELD_STYLES.GUEST_SEARCH_BAR}
                          placeholder={'Search for guest...'}
                      />

                      <List>
                        <GuestListItem
                            fullName={"Adam Bricks"}
                            jobTitle={"Builder"}
                            image={'https://thispersondoesnotexist.com/'}
                            registrationStatus={'PENDING'}
                            isEventOpen={true}
                        />
                        <Divider component="li"/>
                        <GuestListItem
                            fullName={"Adam Bricks"}
                            jobTitle={"Builder"}
                            image={'https://thispersondoesnotexist.com/'}
                            registrationStatus={'CONFIRMED'}
                            isEventOpen={true}
                        />
                        <Divider component="li"/>
                        <GuestListItem
                            fullName={"Adam Bricks"}
                            jobTitle={"Builder"}
                            image={'https://thispersondoesnotexist.com/'}
                            registrationStatus={'CONFIRMED'}
                            isEventOpen={false}
                        />
                      </List>

                      <GenericButton icon={IconButton.ADD_GUESTS} type={ButtonTypes.submit} style={BUTTON_STYLES.LIGHT_GRAY_BOX} />

                    </div>

                    <p>Who's attending section</p>
                  </Box>
                </Grid>
              <Grid item xs={3} className={styles.gridItem}>
                <Box component='section' className={styles.details}>
                  <h3>Here goes:</h3>
                  <p>Event date</p>
                  <p>Event time</p>
                  <p>Location</p>
                  <p>Price</p>
                  <p>Register button</p>
                </Box>
              </Grid>
            </Grid>
          <Box component='section' className={styles.moreEventsLikeThis}>
            <h3>Here goes:</h3>
            <p>divider</p>
            <p>event cards</p>
          </Box>
        </Container>
    );
};

export default Event;
