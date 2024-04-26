import FONT_FAMILY from '../../styles/Font';

const muiInputBaseOptions = {
  styleOverrides: {
    input: {
      '&.date-picker, &.time-picker-small , &.time-picker-big': {
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '1rem',
      },
    },
  },
};

export default muiInputBaseOptions;
