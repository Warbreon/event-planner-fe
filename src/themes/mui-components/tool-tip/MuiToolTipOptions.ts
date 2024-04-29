import { COLORS } from "../../styles/Colors";
import FONT_FAMILY from "../../styles/Font";

const muiToolTipOptions = {
  styleOverrides: {
    tooltipArrow: {
      '&.error': {
        backgroundColor: COLORS.WHITE,
        border: `2px solid ${COLORS.ERROR}`,
        color: COLORS.ERROR,
        fontFamily: FONT_FAMILY,
        fontSize: '0.875rem',
        lineHeight: '1rem',
        fontWeight: 400,
        borderRadius: '0.5rem',
      },
    },
    arrow: {
      '&:before': {
        backgroundColor: COLORS.WHITE,
        border: `2px solid ${COLORS.ERROR}`,
      }
    }
  },
};

export default muiToolTipOptions;