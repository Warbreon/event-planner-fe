import { PAYMENT_STATUS } from '../../../../models/PaymentStatus';
import { REGISTRATION_STATUS } from '../../../../models/RegistrationStatus';
import GenericButton, { ButtonTypes } from '../ButtonComponent';
import EventButtonVM from './EventButtonVM';

interface Props {
    onClick: () => void;
    currentUserRegistrationStatus: REGISTRATION_STATUS | null,
    currentUserPaymentStatus: PAYMENT_STATUS | null,
    isPaidEvent?: boolean;
    disabled?: boolean;
    isCurrentUserCreator?: boolean;
}

const EventButton: React.FC<Props> = ({
    onClick,
    currentUserRegistrationStatus = REGISTRATION_STATUS.DEFAULT,
    currentUserPaymentStatus = PAYMENT_STATUS.DEFAULT,
    isPaidEvent = false,
    disabled = false,
    isCurrentUserCreator = false,
}) => {
    const { icon, styles } = EventButtonVM(currentUserRegistrationStatus, isPaidEvent, currentUserPaymentStatus, isCurrentUserCreator);

    return (
        <GenericButton
            type={ButtonTypes.button}
            styles={styles}
            icon={icon}
            onClick={onClick}
            disabled={disabled}
        />
    )
}

export default EventButton