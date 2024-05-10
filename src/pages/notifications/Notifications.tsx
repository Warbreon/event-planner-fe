import { Box, Typography } from '@mui/material'
import PageHeader from '../../components/headers/page-headers/PageHeader'
import NotificationsVM from './NotificationsVM'
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import NotificationCard from '../../components/notification/NotificationCard';
import styles from './Notifications.module.css';

const Notifications = () => {
    const { notifications, activeNotifications, totalNotifications, isLoading, error } = NotificationsVM();

    if (isLoading) return <LoadingIndicator />;
    if (error) return <div className={styles.container}>{error}</div>;

    return (
        <div className={styles.container}>
            <PageHeader text='Notifications' />
            <div className = {styles.notificationCounts}>
                <Typography variant='body2'>
                    {totalNotifications} items, <span className={styles.newNotifications}>{activeNotifications} new</span>
                </Typography>
            </div>
            <Box className={styles.notifications}>
                {notifications?.map((notification) => (
                    <NotificationCard key={notification.id} {...notification} />
                ))}
            </Box>
        </div>
    )
}

export default Notifications