import ModalComponent from "../../modal/ModalComponent";
import SelectGuests from "../modal-content/SelectGuests";
import ButtonComponentGroup from "../../buttons/buton-group/ButtonComponentGroup";
import SnackbarComponent, {ALERT_SEVERITY} from "../../snackbar/SnackbarComponent";
import {User} from "../../../models/User";
import {FC} from "react";

interface Props {
    onModalClose: () => void;
    onConfirm: () => void;
    showModal: boolean;
    users: User[];
    confirmButtonLabel: string;
    showError: boolean;
    errorMessage: string;
}

const AddGuestSectionModal: FC<Props> = ({
                                             onModalClose,
                                             onConfirm,
                                             showModal,
                                             users,
                                             confirmButtonLabel,
                                             showError,
                                             errorMessage
                                         }) => {

    return (
        <ModalComponent
            header='Add guests'
            handleClose={onModalClose}
            isOpen={showModal}
            content={<SelectGuests users={users}/>}
            footer={
                <>
                    <ButtonComponentGroup
                        onCancel={onModalClose}
                        onConfirm={onConfirm}
                        closeButtonLabel='Cancel'
                        confirmButtonLabel={confirmButtonLabel}
                    />
                    <SnackbarComponent open={showError} message={errorMessage} severity={ALERT_SEVERITY.ERROR}/>
                </>
            }
        />
    );
}

export default AddGuestSectionModal