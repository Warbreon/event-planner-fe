import { formatDate } from '../../utils/DateConverter1';
import { FC } from 'react';
import { Typography } from '@mui/material';

interface DateLocationProps {
	date: string;
	location: string;
	price?: number;
}

const DateLocationPrice: FC<DateLocationProps> = ({ date, location, price }) => {
	return (
		<Typography variant='body2'>
			{date} • {location}
			{!!price && price > 0 && ` • $${price}`}
		</Typography>
	);
};

export default DateLocationPrice;
