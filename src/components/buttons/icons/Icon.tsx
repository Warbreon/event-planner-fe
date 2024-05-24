import { FC } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { IconButton } from '../ButtonComponent';
import CloseIcon from '@mui/icons-material/Close';

interface IconProps {
	icon: IconButton;
}

const Icon: FC<IconProps> = ({ icon }) => {
	switch (icon) {
		case IconButton.REGISTER:
			return <CheckCircleOutlineIcon />;
		case IconButton.GET_TICKETS:
			return <ConfirmationNumberIcon />;
		case IconButton.GOING:
			return <CheckCircleIcon />;
		case IconButton.RSVP:
			return <EmailIcon />;
		case IconButton.ADD_EVENT:
		case IconButton.ADD_GUESTS:
			return <AddIcon />;
		case IconButton.VIEW_ALL_GUESTS:
		case IconButton.VIEW_ALL_EVENTS:
			return <KeyboardArrowRightRoundedIcon />;
		case IconButton.HOME:
			return <HomeIcon />;
		case IconButton.YOUR_EVENTS:
			return <InsertInvitationIcon />;
		case IconButton.CANCEL:
		case IconButton.CANCELLED:
			return <CloseIcon />;
		
	}
};

export default Icon;
