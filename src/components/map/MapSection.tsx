import { FC } from 'react';
import { Address } from '../../models/Address';
import Map from './Map';
import SectionHeader from '../../shared/components/section-header/SectionHeader';

interface MapSectionProps {
	address: Address | null;
}

const MapSection: FC<MapSectionProps> = ({ address }) => {
	return (
		<section>
			<SectionHeader name='Location' buttonTitle='View in maps' onButtonClick={() => {}} />
			<Map location={address} />
		</section>
	);
};

export default MapSection;
