import { COLORS } from "../../styles/Colors";

const muiCardOptions = {
  styleOverrides: {
    root: {
      '&.userCard': {
        border: '1px solid hsl(0, 0%, 87%)',
        borderRadius: '0.75rem',
        width: '11rem',
        height: '14.5rem',
      },
      '&.userCard > .MuiCardContent-root': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        width: '100%',
        height: '100%',
      },
      '&.active-notification, &.inactive-notification': {
        width: '776px',
        height: '120px',
        boxShadow: 'none',
        borderRadius: '0.75rem',
      },
      '&.active-notification': {
        backgroundColor: COLORS.ACTIVE_NOTIFICATION,
        border: `1px solid ${COLORS.ACTIVE_NOTIFICATION_BORDER}`
      },
      '&.inactive-notification': {
        backgroundColor: COLORS.WHITE,
        border: `1px solid ${COLORS.GRAY_BORDER}`
      }
    },
  },
};

export default muiCardOptions;