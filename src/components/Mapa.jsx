import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Mapa() {
  return (
    <MapContainer center={[8.618955631160823, -70.25615271176467]} zoom={15} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[8.618955631160823, -70.25615271176467]}>
        <Popup className="text-secondary">
          PadelEvent Sede Alto Barinas
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
