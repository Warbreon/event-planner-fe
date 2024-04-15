import { CardMedia } from '@mui/material';
import { FC } from 'react';

interface ImageProps {
	styles?: string;
	imageUrl: string;
}

const Image: FC<ImageProps> = ({ imageUrl, styles }) => {
	return <CardMedia className={styles} component='img' image={imageUrl} />;
};

export default Image;
