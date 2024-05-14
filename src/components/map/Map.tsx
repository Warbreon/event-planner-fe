import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import { MapContainer, TileLayer, Marker, MapContainerProps, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import marker from './marker/marker.png';
import { Address } from '../../models/Address';
import useMapViewModel from './MapViewModel';
import styles from './Map.module.css';
import './Map.css';

interface MapProps extends MapContainerProps {
	location: Address | null;
}

const redMarker = L.icon({
	iconUrl: marker,
	iconSize: [50, 50],
	iconAnchor: [12, 41],
	tooltipAnchor: [16, -28],
});

const Map: FC<MapProps> = ({ center, zoom, location, ...props }) => {
	const { position } = useMapViewModel(location);
	return (
		<>
			{position && (
				<MapContainer
					center={position}
					zoom={17}
					scrollWheelZoom={true}
					zoomControl={false}
					className={styles.mapContainer}
					{...props}
				>
					<TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />
					<Marker position={position} icon={redMarker}>
						<Tooltip direction='right' offset={[5, 17]} permanent className={`${styles.textOnlyPopup}`}>
							{`${location?.venueName}`}
						</Tooltip>
					</Marker>
				</MapContainer>
			)}
		</>
	);
};

export default Map;
