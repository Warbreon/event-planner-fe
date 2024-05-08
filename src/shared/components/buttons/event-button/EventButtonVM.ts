import { REGISTRATION_STATUS } from '../../../../models/RegistrationStatus';
import { BUTTON_STYLES } from '../../../../themes/styles/Button';
import { IconButton } from '../ButtonComponent';

interface ButtonConfig {
    icon: IconButton;
    styles: string;
}

const eventButtonConfigs: Record<REGISTRATION_STATUS, ButtonConfig> = {
    [REGISTRATION_STATUS.PENDING]: {
        icon: IconButton.PENDING,
        styles: BUTTON_STYLES.GRAY,
    },
    [REGISTRATION_STATUS.ACCEPTED]: {
        icon: IconButton.GOING,
        styles: BUTTON_STYLES.BLUE,
    },
    [REGISTRATION_STATUS.REJECTED]: {
        icon: IconButton.REGISTER,
        styles: BUTTON_STYLES.GRAY,
    },
    [REGISTRATION_STATUS.DEFAULT]: {
        icon: IconButton.REGISTER,
        styles: BUTTON_STYLES.GRAY,
    },
};

const EventButtonVM = (status: REGISTRATION_STATUS | null) => {
    const getEventButtonConfig = () => {
        return eventButtonConfigs[status ?? REGISTRATION_STATUS.DEFAULT];
    }

    return getEventButtonConfig;
}

export default EventButtonVM