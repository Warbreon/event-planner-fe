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
    },
  },
};

export default muiCardOptions;