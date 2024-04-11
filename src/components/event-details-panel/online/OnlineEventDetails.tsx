import { Typography } from '@mui/material';
import {FC} from 'react'
import { getMeetingPlatform } from '../../../utils/URLParser';
import styles from '../EventDetailsPanel.module.css';

interface Props {
  inviteUrl: string
}

const OnlineEventDetails: FC<Props> = ({inviteUrl}) => {
  const platform = getMeetingPlatform(inviteUrl);
	return (
		<>
			<Typography className={styles.info}>Online</Typography>
			<a className={styles.link} href={inviteUrl} title='Online event link'>
				Join {platform} 
			</a>
		</>
	);
}

export default OnlineEventDetails