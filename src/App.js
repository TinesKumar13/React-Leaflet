import "./App.css";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";

function App() {
  const val = [];
  const redOptions = { color: "red" };

  const addFunction = (a, b) => {
    const data = [];
    data.push.apply(data, [a, b]);
    val.push(data);
  };

  addFunction(3.0782, 101.5883);
  addFunction(3.0567, 101.5851);

  console.log(val);
  return (
    <div className="App">
      <MapContainer center={val[0]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {val.map((v) => {
          return (
            <CircleMarker
              center={v}
              pathOptions={redOptions}
              radius={35}
              className="circle red"
            />
          );
        })}
      </MapContainer>
    </div>
  );
}

export default App;
