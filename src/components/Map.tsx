import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map() {
    return (
      <MapContainer center={[52.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    );
  }