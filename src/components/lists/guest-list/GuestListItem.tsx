import { ListItemAvatar, ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import { FC, ReactNode } from 'react';

type Props = {
	image: string;
	fullName: string;
	details: string;
	styles: string;
	textStyles: string;
	avatarListItemStyle?: string;
	avatarStyle: string;
	children?: ReactNode;
};

const GuestListItem: FC<Props> = ({ image, fullName, details, styles, textStyles, avatarStyle, avatarListItemStyle, children }) => {
	return (
		<ListItem disablePadding className={styles}>
			<ListItemAvatar className={avatarListItemStyle}>
				<Avatar alt={fullName} src={image} className={avatarStyle} />
			</ListItemAvatar>
			<ListItemText className={textStyles} primary={fullName} secondary={details} />
			{children}
		</ListItem>
	);
};

export default GuestListItem;
