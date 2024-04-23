export const constructGoogleMapsURL = (venueName: string, city: string, street: string, building: string, zip: string) => {
	const encodedAddress = encodeURIComponent(`${venueName}, ${building}, ${street}, ${city}, ${zip}`);
	return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};
