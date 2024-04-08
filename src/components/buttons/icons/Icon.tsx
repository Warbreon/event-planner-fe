import { FC } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import { Icons } from '../ButtonComponent';



interface IconProps {
	icon: Icons;
}

const Icon: FC<IconProps> = ({ icon }) => {
	switch (icon) {
		case Icons.REGISTER:
			return <CheckCircleOutlineIcon />;
		case Icons.GET_TICKETS:
			return <ConfirmationNumberIcon />;
		case Icons.GOING:
			return <CheckCircleIcon />;
		case Icons.RSVP:
			return <EmailIcon />;
		case Icons.ADD:
			return <AddIcon />;
	}
};

export default Icon;
