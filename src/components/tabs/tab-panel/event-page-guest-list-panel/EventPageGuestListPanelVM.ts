const EventPageGuestListPanelVM = () => {
    const onPlusButtonClick = () => {
        (console.log("Button clicked"));
    };
    const onInputChange = () => {
        (console.log("New input"));
    };
    const onConfirmClick = () => {
        (console.log("Confirmed"));
    };
    const onDeclineClick = () => {
        (console.log("Declined"));
    };

    return { onPlusButtonClick, onInputChange, onConfirmClick, onDeclineClick};
};

export default EventPageGuestListPanelVM;
