import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, ScaleControl } from 'react-leaflet';
import DatePickerComponent from './components/DatePicker';

function App() {
  const position = [51.505, -0.09];
  const mapUrl = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png';

  return(
    <>
      <DatePickerComponent/>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <ScaleControl position='bottomleft'/>
        <TileLayer url={mapUrl} />
      </MapContainer>
    </>
  )
}

export default App;
