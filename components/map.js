import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const ICON = icon({
  iconUrl: "/assets/marker.png",
  iconSize: [40, 40],
});

const Map = ({ latlong, marker }) => {
  marker.forEach((item) => {
    item.location = [
      latlong[0] + Math.random()/10,
      latlong[1] + Math.random()/10,
    ];
  });

  return (
    <MapContainer
      center={latlong}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: 400, width: "100%", zIndex: "0" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker &&
        marker.map((item) => (
          <Marker key={item.name} icon={ICON} position={item.location}>
            <Popup>{item.name}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;
