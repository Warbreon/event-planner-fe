const listItemTextOptions = {
  styleOverrides: {
    root: {
      '.MuiListItemText-secondary': {
        fontSize: '0.875rem',
        lineHeight: '1.5rem'
      },

      '&.modal-user-list': {
        '.MuiListItemText-primary': {
          fontSize: '1rem',
          lineHeight: '1.5rem'
        },
      },
      '&.event-page-user-list': {
        '.MuiListItemText-primary': {
          fontSize: '1.25rem',
          lineHeight: '2rem'
        },
      }
    }
  }
}

export default listItemTextOptions;