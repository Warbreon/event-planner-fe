export enum Currency {
	EUR = 'EUR',
	USD = 'USD',
	GBP = 'GBP',
}

export const convertCurrencyToSymbol = (currency: Currency | string): string => {
	switch (currency) {
		case Currency.EUR:
			return '€';
		case Currency.GBP:
			return '£';
		case Currency.USD:
			return '$';
		default:
			return '$';
	}
};
