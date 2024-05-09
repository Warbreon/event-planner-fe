import { useEffect, useState } from 'react';
import { Address } from '../../models/Address';

const useMapViewModel = (location: Address | null | undefined) => {
	const [position, setPosition] = useState<[number, number] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
						`${location?.zip} ${location?.city}, ${location?.street} ${location?.building}`
					)}`
				);
				const data = await response.json();
				if (data && data.length > 0) {
					const { lat, lon } = data[0];
					setPosition([parseFloat(lat), parseFloat(lon)]);
				}
			} catch (error) {
				console.error('Error fetching location:', error);
			}
		};

		fetchData();
	}, [location?.building, location?.city, location?.street, location?.zip]);

	return { position };
};

export default useMapViewModel;
