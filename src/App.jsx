import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./App.css";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import GraficoTiposRobo from "./components/GraficoTipoRobo";
import GraficoDistancias from "./components/GraficoDistancias";
import Informacion from "./components/Informacion";
import MyGraph from "./components/MyGraph";
import GraficoRobosEstadisticaRobo from "./components/GraficoRobosEstadisticaHora";
import GrafoRobosPorDiaSemana from "./components/GrafoRobosPorDiaSemana";

function App() {


  //Sur
  const Chillogallo = [-0.275933, -78.554003]
  //Centro
  const SanJuan = [-0.212786, -78.512886]
  const SanRoque = [-0.220585, -78.521939]
  const RedondelMiraflores = [-0.206011, -78.509114]
  const ElTrebol = [-0.231742, -78.503022]
  const LaMarin = [-0.071224, -78.431574]

  //Valles
  const RedondelCumbaya = [-0.214820, -78.442685]

  //Norte
  const OccidentalCarvajal = [-0.160787, -78.496849]
  const Condado = [-0.103254, -78.499846]
  const OccidentalCarlosV = [-0.137634, -78.501520]
  const RedondelCiclista = [-0.163127, -78.462931]
  const SeisDiciembreYShyris = [-0.159435, -78.477333]
  const EloyAlfaroYGranados = [-0.166066, -78.468974]
  const ComiteDelPueblo = [-0.122022, -78.463953]
  const Atucucho = [-0.1228737, -78.4950014]
  const LaRoldos = [-0.084964, -78.509109]

  return (

    <div className="App">
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <img src="/udlaLogo.png" width={210} height={90} alt="" />
        <h2>Proyecto Matemáticas Discretas</h2>
        <h2>-----------------------</h2>
      </nav>

      <br />
      <h1 style={{ fontSize: "55px" }}><center>Análisis Geográfico de Crimen en la Ciudad de Quito</center>  </h1>
      <h1 style={{ marginTop: "45px" }}><center>Tipos de robo por periodo</center></h1>


      <div className="centrarMapa">
        <GraficoTiposRobo />
      </div>

      <br />
      <br />
      <h1 style={{ marginTop: "45px", backgroundColor: "#1B262C", color: "white", padding: "30px" }}><center>Estadísticas de Robo por Horario</center></h1>

      <div style={{ display: "flex", marginTop: "70px" }}>
        <div style={{ marginLeft: "10%" }}>
          <GraficoRobosEstadisticaRobo />
        </div>

        <div>

          <GrafoRobosPorDiaSemana />

        </div>

      </div>
      <div>

      </div>
      <h1 style={{ marginTop: "45px", backgroundColor: "#1B262C", color: "white", padding: "30px" }}><center>Grafo Robos Por Dia de la Semana</center></h1>

      <div className="centrarMapa">

        <MyGraph />



      </div>

      <br />
      <h1 style={{ fontSize: "55px", backgroundColor: "#1B262C", color: "white", padding: "20px" }}><center>Mapa dinámico de lugares Peligrosos en Quito</center>  </h1>
      <div className="centrarMapa">
        <MapContainer center={[-0.159435, -78.477333]} zoom={13} scrollWheelZoom={false} style={{ height: 650, width: "70%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          < Marker position={Chillogallo} >

            <Popup>
              Sur<br /> CHILLOGALLO
            </Popup>
          </Marker>
          < Marker position={SanJuan} >
            <Popup>
              Centro<br /> San Juan
            </Popup>
          </Marker>
          < Marker position={SanRoque} >

            <Popup>
              Centro<br /> San Roque
            </Popup>
          </Marker>
          < Marker position={RedondelMiraflores} >
            <Popup>
              Centro<br /> Redondel MiraFlores
            </Popup>
          </Marker>
          < Marker position={ElTrebol} >

            <Popup>
              Centro<br /> El trébol
            </Popup>
          </Marker>
          < Marker position={LaMarin} >

            <Popup>
              Centro<br /> La Marin
            </Popup>
            <Tooltip>La Marin</Tooltip>
          </Marker>

          < Marker position={RedondelCumbaya} >

            <Popup>
              Valles<br /> Redondel de cumbaya
            </Popup>
          </Marker>

          < Marker position={OccidentalCarvajal} >

            <Popup>
              Norte<br /> Occidental y Carvajal
            </Popup>
          </Marker>
          < Marker position={Condado}>

            <Popup>
              Norte<br /> Condado
            </Popup>
          </Marker>
          < Marker position={OccidentalCarlosV}>

            <Popup>
              Norte<br /> Occidental y Carlos V
            </Popup>
          </Marker>
          < Marker position={RedondelCiclista}>

            <Popup>
              Norte<br /> Redondel del ciclista
            </Popup>
          </Marker>
          < Marker position={SeisDiciembreYShyris}>

            <Popup>
              Norte<br /> 6 de Diciembre y Shirys
            </Popup>
          </Marker>
          < Marker position={EloyAlfaroYGranados}>

            <Popup>
              Norte<br /> Eloy Alfaro y Granados
            </Popup>
          </Marker>
          < Marker position={ComiteDelPueblo}>

            <Popup>
              Norte<br /> Comite del Pueblo
            </Popup>
          </Marker>
          < Marker position={Atucucho}>

            <Popup>
              Norte<br /> Atucucho
            </Popup>
          </Marker>
          < Marker position={LaRoldos}>

            <Popup>
              Norte<br /> La Roldós

            </Popup>
          </Marker>
          {/*  <LeafletGeocoder /> */}

          <LeafletRoutingMachine posicion={Chillogallo} />
        </MapContainer>
        <div style={{ width: "20%", padding: "20px" }} >
          <Informacion />
        </div>
      </div>

      <footer style={{ height: "200px", backgroundColor: "#1B262C", color: "white", display: "flex", justifyContent:"space-around", padding:"20px"}} className="centrarMapa">
        <img src="/udlaLogo.png" alt="" />
      <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
      <h1 style={{ color: "#3282B8", alignItems:"center"}}>Proyecto Matemáticas Discretas</h1>
        <br />
      <p>Datos recopilados de la Fiscalía General del Estado Ecuatoriano/</p>
        <p> https://www.fiscalia.gob.ec/analitica-cifras-de-robo</p>
      </div>

       
      </footer>

    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;