import SelectGuests from "../modal-content/SelectGuests";
import SnackbarComponent, {ALERT_SEVERITY} from "../../snackbar/SnackbarComponent";
import {User} from "../../../models/User";
import {FC} from "react";
import ModalComponent from "../../../shared/components/modal/ModalComponent";
import ButtonComponentGroup from "../../../shared/components/buttons/buton-group/ButtonComponentGroup";
import styles from "../AddGuestsSection.module.css";
import {BUTTON_STYLES} from "../../../themes/styles/Button";
import {ButtonTypes} from "../../../shared/components/buttons/ButtonComponent";

interface Props {
    onModalClose: () => void;
    onConfirm: () => void;
    showModal: boolean;
    users: User[];
    confirmButtonLabel: string;
    errorMessage: string;
    isSnackbarOpen: boolean;
    handleSnackbarClose: () => void;
}

const AddGuestSectionModal: FC<Props> = ({
                                             onModalClose,
                                             onConfirm,
                                             showModal,
                                             users,
                                             confirmButtonLabel,
                                             errorMessage,
                                             isSnackbarOpen,
                                             handleSnackbarClose,
                                         }) => {

    const footer = () => (
        <div className={styles.footerContainer}>
            <ButtonComponentGroup
                buttons={[
                    {
                        label: 'Cancel',
                        onClick: onModalClose,
                        className: `${BUTTON_STYLES.OUTLINED_GRAY_BORDER} ${BUTTON_STYLES.MODAL_BUTTON}`,
                    },
                    {
                        label: confirmButtonLabel,
                        onClick: onConfirm,
                        className: `${BUTTON_STYLES.BLACK_BACKGROUND} ${BUTTON_STYLES.MODAL_BUTTON}`,
                        type: ButtonTypes.submit,
                    },
                ]}
                className={styles.modalButtonsContainer}
            />
            <SnackbarComponent
                open={isSnackbarOpen}
                message={errorMessage}
                autoHideDuration={5000}
                handleClose={handleSnackbarClose}
                severity={ALERT_SEVERITY.ERROR}
                className={styles.snackbar}
            />
        </div>
    );

    return (
        <div className={styles.footerContainer}>
            <ModalComponent
                header='Add guests'
                handleClose={onModalClose}
                isOpen={showModal}
                content={<SelectGuests users={users} />}
                footer={footer()}
                showDivider
            />
        </div>
    );
}

export default AddGuestSectionModal