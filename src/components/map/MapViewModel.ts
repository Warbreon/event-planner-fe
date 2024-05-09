import { useEffect, useState } from 'react';
import { Address } from '../../models/Address';
import axios from 'axios';

const useMapViewModel = (location: Address | null | undefined) => {
	const [position, setPosition] = useState<[number, number] | null>(null);

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            `${location?.zip} ${location?.city}, ${location?.street} ${location?.building}`
          )}`
        );
        const data = response.data;
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
