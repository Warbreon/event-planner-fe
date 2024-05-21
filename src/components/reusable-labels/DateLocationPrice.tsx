import { FC } from 'react';
import { Typography } from '@mui/material';
import { convertCurrencyToSymbol } from '../../constants/Currency';

interface DateLocationProps {
	date: string;
	location: string;
	price?: number;
	currency?: string;
}

const DateLocationPrice: FC<DateLocationProps> = ({ date, location, price, currency }) => {
	return (
		<Typography variant='body2'>
			{date} • {location}
			{!!price && price > 0 && ` • ${convertCurrencyToSymbol(currency ? currency : '')}${price}`}
		</Typography>
	);
};

export default DateLocationPrice;
