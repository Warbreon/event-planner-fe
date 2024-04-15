const EventPageGuestListPanelVM = () => {
    const onPlusButtonClick = () => {
        (console.log("Button clicked"));
    };
    const onSearchChange = () => {
        (console.log("New input"));
    };
    const onConfirmClick = () => {
        (console.log("Confirmed"));
    };
    const onDeclineClick = () => {
        (console.log("Declined"));
    };

    return { onPlusButtonClick, onSearchChange, onConfirmClick, onDeclineClick};
};

export default EventPageGuestListPanelVM;
