import { Typography, Box, Divider, Chip } from '@mui/material';
import { Attendee } from '../../models/Attendee';
import Agenda from './agenda/Agenda';
import Attending from './attending/Attending';
import SectionHeader from '../../shared/components/section-header/SectionHeader';
import { Tag } from '../../models/Tag';
import { Address } from '../../models/Address';
import { FC } from 'react';
import MapSection from '../map/MapSection';
import styles from './AboutEvent.module.css';
import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Links from "@tiptap/extension-link";
import useAboutViewModel from './attending/AboutVM';

interface EventDetailsProps {
	description: string;
	agenda: string[] | null;
	attendees: Attendee[] | null;
	eventTags: Tag[] | null;
	address: Address | null | undefined;
	handleChangeTab: (newValue: number) => void;
}

const AboutEvent: FC<EventDetailsProps> = ({ agenda, attendees, eventTags, description, address, handleChangeTab }) => {
	const viewEditor = useEditor({
		content: description,
		editable: false,
		extensions: [
			StarterKit,
			Underline,
			Links,
		],
	})
	const {acceptedAttendees} = useAboutViewModel(attendees || []);
	return (
		<Box id='allDetailsBox'>
			<Box className={styles.sectionContainer}>
				<SectionHeader name='Details' />
				<EditorContent editor={viewEditor} className={styles.editor} />
			</Box>
			{eventTags && eventTags.length > 0 && (
				<Box className={styles.sectionContainer}>
					<Typography variant='h3'>Tags</Typography>
					<Box marginY='25px'>
						{eventTags.map((tag) => (
							<Chip className='event-page-tag' key={tag.id} label={tag.name} />
						))}
					</Box>
				</Box>
			)}
			{agenda && agenda.length > 0 && (
				<Box id='agendaBox' className={styles.sectionContainer}>
					<Divider />
					<Agenda agendaItems={agenda} />
				</Box>
			)}

			{acceptedAttendees && acceptedAttendees?.length > 0 && (
				<Box className={styles.sectionContainer}>
					<Divider />
					<Attending attendees={acceptedAttendees} handleChangeTab={handleChangeTab}/>
				</Box>
			)}

			{address && (
				<Box className={styles.sectionContainer}>
					<Divider />
					<MapSection address={address} />
				</Box>
			)}
		</Box>
	);
};

export default AboutEvent;
