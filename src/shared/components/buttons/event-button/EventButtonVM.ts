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
    // if isPaidEvent then IconButton.GET_TICKETS instead of reg status default else IconButton.REGISTER
    // if isPaidEvent and REGISTRATION_STATUS DEFAULT = show IconButton.GET_TICKETS
    // if isPaidEvent and user pressed Get tickets = REGISTRATION_STATUS = pending, PAYMENT_STATUS = pending
    // if isPaidEvent and event.isOpen=true after user paid = REGISTRATION_STATUS = ACCEPTED, PAYMENT_STATUS = PAID
    // if isPaidEvent and event.isOpen=false after user paid = REGISTRATION_STATUS = PENDING, PAYMENT_STATUS = PAID
    // we don't need to pass event.isOpen here as this whole component is already handling all the logic about isOpen events, it's not handling PAYMENT right now
    // if isPaidEvent and REGISTRATION_STATUS = accepted = show IconButton.GOING
    // if isPaidEvent and PAYMENT_STATUS = REFUNDED = show IconButton.GET_TICKETS
    // if isPaidEvent and isOpen event and user pressed get tickets = set REGISTRATION_STATUS = pending, PAYMENT_STATUS = pending and redirect to payment page if everything is fine, REGISTRATION_STATUS = accepted, PAYMENT_STATUS = paid
};

const EventButtonVM = (registrationStatus: REGISTRATION_STATUS | null, isPaidEvent: boolean, paymentStatus: PAYMENT_STATUS | null): ButtonConfig => {
    if (isPaidEvent) {
        if (registrationStatus === REGISTRATION_STATUS.DEFAULT || paymentStatus === PAYMENT_STATUS.REFUNDED || paymentStatus === PAYMENT_STATUS.DEFAULT || paymentStatus === PAYMENT_STATUS.FAILED) {
            return { icon: IconButton.GET_TICKETS, styles: BUTTON_STYLES.GRAY };
        } else if (registrationStatus === REGISTRATION_STATUS.ACCEPTED) {
            return { icon: IconButton.GOING, styles: BUTTON_STYLES.BLUE };
        } else if (registrationStatus === REGISTRATION_STATUS.PENDING) {
            return { icon: IconButton.PENDING, styles: BUTTON_STYLES.GRAY };
        }
    }
    return eventButtonConfigs[registrationStatus ?? REGISTRATION_STATUS.DEFAULT];
}

export default EventButtonVM