import { FC } from 'react';
import { Address } from '../../models/Address';
import Map from './Map';
import SectionHeader from '../../shared/components/section-header/SectionHeader';
import { constructGoogleMapsURL } from '../../utils/MapsUrlByAddress';

interface MapSectionProps {
	address: Address | null;
}

const MapSection: FC<MapSectionProps> = ({ address }) => {
	if (!address) {
    return <section>No address provided</section>;
  }

	const {venueName, city, street, building, zip} = address;
	const url = constructGoogleMapsURL(venueName, city, street, building, zip);
	
	return (
		<section>
			<SectionHeader name='Location' buttonTitle='View in maps' onButtonClick={() => {window.location.href = url}} />
			<Map location={address} />
		</section>
	);
};

export default MapSection;
