export const constructGoogleMapsURL = (venue: string, city: string, street: string, building: string, zip: string) => {
	const encodedAddress = encodeURIComponent(`${venue}, ${building}, ${street}, ${city}, ${zip}`);
	return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};
