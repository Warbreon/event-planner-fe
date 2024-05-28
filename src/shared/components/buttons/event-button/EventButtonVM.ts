import { PAYMENT_STATUS } from '../../../../models/PaymentStatus';
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
        icon: IconButton.REJECTED,
        styles: BUTTON_STYLES.GRAY,
    },
    [REGISTRATION_STATUS.DEFAULT]: {
        icon: IconButton.REGISTER,
        styles: BUTTON_STYLES.GRAY,
    },
};

const EventButtonVM = (registrationStatus: REGISTRATION_STATUS | null, isPaidEvent: boolean, paymentStatus: PAYMENT_STATUS | null): ButtonConfig => {
    if (isPaidEvent) {
        if (paymentStatus === null || paymentStatus === PAYMENT_STATUS.DEFAULT || paymentStatus === PAYMENT_STATUS.FAILED) {
            return { icon: IconButton.GET_TICKETS, styles: BUTTON_STYLES.GRAY };
        }
    }
    return eventButtonConfigs[registrationStatus ?? REGISTRATION_STATUS.DEFAULT];
}

export default EventButtonVM;