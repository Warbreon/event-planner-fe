import { Typography } from '@mui/material';
import { FC } from 'react';
import { TYPOGRAPHY_STYLES } from '../../themes/styles/Typography';
import styles from './WaitingListStatus.module.css';

interface Props {
    onClick: () => void;
}

const WaitingListStatus: FC<Props> = ({ onClick }) => {
    return (
        <div className={styles.container}>
            <Typography variant='body1' className={TYPOGRAPHY_STYLES.WAITING_LIST_MESSAGE}>
                You’re currently in a waiting list to receive event organizer confirmation
            </Typography>
            <Typography variant='body1' className={TYPOGRAPHY_STYLES.WAITING_LIST_MESSAGE}>
                <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className={styles.registerAnchor}>I can’t go</a>
            </Typography>
        </div>
    )
}

export default WaitingListStatus