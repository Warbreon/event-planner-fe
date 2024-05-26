import { useState } from 'react';

interface Props {
    onClick: () => void;
}

const WaitingListVM = ({ onClick }: Props) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleDialogOpen = () => setDialogOpen(true);
    const handleDialogClose = () => setDialogOpen(false);
    const handleConfirm = () => {
        onClick();
        handleDialogClose();
    };

    return { dialogOpen, handleDialogClose, handleConfirm, handleDialogOpen }
}

export default WaitingListVM