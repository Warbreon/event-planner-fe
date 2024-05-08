import { REGISTRATION_STATUS } from '../../../../models/RegistrationStatus';
import GenericButton, { ButtonTypes } from '../ButtonComponent';
import EventButtonVM from './EventButtonVM';

interface Props {
    onClick: () => void;
    currentUserRegistrationStatus: REGISTRATION_STATUS | null,
    disabled?: boolean;
}

const EventButton: React.FC<Props> = ({
    onClick,
    currentUserRegistrationStatus = REGISTRATION_STATUS.DEFAULT,
    disabled = false,
}) => {
    const getEventButtonConfig = EventButtonVM(currentUserRegistrationStatus);
    const { icon, styles } = getEventButtonConfig();

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