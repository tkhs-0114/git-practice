import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './initLeaflet';
import './simpleMap.css';

const simpleMap = () => {
    const position = new LatLng(35.012698, 135.7094367);

    return (
        <MapContainer center={position} zoom={13}>
            <TileLayer
                attribution='© <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
                url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    PopUp!! PopUp!! PopUp!! <br /> ポップアップ
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default simpleMap;
