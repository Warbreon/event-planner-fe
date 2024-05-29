import { Box, Typography } from '@mui/material'
import PageHeader from '../../components/headers/page-headers/PageHeader'
import NotificationsVM from './NotificationsVM'
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import NotificationCard from '../../components/notification/NotificationCard';
import styles from './Notifications.module.css';
import ErrorAlert from '../../components/error/ErrorAlert';

const Notifications = () => {
    const { notifications, totalNotifications, isLoading, error, newNotificationsCount, markNotificationAsViewed } = NotificationsVM();

    if (isLoading) return <LoadingIndicator />;

    return (
        <div className={styles.container}>
            <PageHeader text='Notifications' />
            {error ? <ErrorAlert message={error} /> 
            : 
            <>
                <div className = {styles.notificationCounts}>
                    {totalNotifications > 0 && (    
                        <Typography variant='body2'>
                            {totalNotifications} items
                            {newNotificationsCount > 0 && (
                                <>
                                    , <span className={styles.newNotifications}> {newNotificationsCount} new</span>
                                </>
                            )}
                        </Typography>
                    )}
                </div>
                <Box className={styles.notifications}>
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <NotificationCard 
                                key={notification.id} 
                                {...notification} 
                                markNotificationAsViewed={markNotificationAsViewed} />
                        ))
                    ) : (
                        <Typography variant='h3'>
                            There are no notifications to review
                        </Typography>
                    )}
                </Box>
            </>
            }
        </div>
    )
}

export default Notifications