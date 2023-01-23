import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
const LeafletRoutingMachine = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    iconSize: [40, 40],
  });
  useEffect(() => {
    // Obtener los marcadores existentes

    const markers = [
      {nombre: "Chillogallo", lat: -0.275933, lng: -78.554003},
      {nombre: "San Juan", lat: -0.212786, lng: -78.512886},
      {nombre: "San Roque", lat: -0.220585, lng: -78.521939},
      {nombre: "Redondel Miraflores", lat: -0.206011, lng: -78.509114},
      {nombre: "El Trebol", lat: -0.231742, lng: -78.503022},
      {nombre: "La Marin", lat: -0.071224, lng: -78.431574},
      {nombre: "Redondel Cumbaya", lat: -0.214820, lng: -78.442685},
      {nombre: "Occidental Carvajal", lat: -0.160787, lng: -78.496849},
      {nombre: "Condado", lat: -0.103254, lng: -78.499846},
      {nombre: "Occidental Carlos V", lat: -0.137634, lng: -78.501520},
      {nombre: "Redondel Ciclista", lat: -0.163127, lng: -78.462931},
      {nombre: "Seis Diciembre Y Shyris", lat: -0.159435, lng: -78.477333},
      {nombre: "Eloy Alfaro Y Granados", lat: -0.166066, lng: -78.468974},
      {nombre: "Comite Del Pueblo", lat: -0.122022, lng: -78.463953},
      {nombre: "Atucucho", lat: -0.1228737, lng: -78.4950014},
      {nombre: "La Roldos", lat: -0.084964, lng: -78.509109}
    ]

    var marker1 = L.marker([-0.159435, -78.477333]).addTo(
      map
    );
    marker1.bindPopup("Su ubicación").openPopup();
    map.on("click", function (e) {
      var coordenadas = [e.latlng.lat, e.latlng.lng]
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(-0.159435, -78.477333),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", function (e) {
          marker1.setLatLng([e.routes[0].coordinates[0].lat, e.routes[0].coordinates[0].lng]);

          // Comparar las ubicaciones de los marcadores existentes con la ubicación del marcador creado con el mouse
          const sourceMarkerLatLng = coordenadas;
         
          markers.forEach(marker => {
            const sourceDistance = L.latLng(marker.lat, marker.lng).distanceTo(sourceMarkerLatLng);
          
            // Mostrar un mensaje de alerta si las ubicaciones están cerca
            if (sourceDistance < 1000 ) {
           
              alert(`🔘🔘🔘🔘🔘🔘🔘🔘🔘🔴Cuidado🔴🔘🔘🔘🔘🔘🔘🔘🔘🔘\n\n\n👁‍🗨${marker.nombre} es un lugar peligroso.\n📍  Distancia desde el marcador: ${sourceDistance.toFixed(2)} metros de distancia.\n📢Le recomendamos mover la ruta para que no pase por lugares peligrosos`);
            }
          });
        })
        .addTo(map);
    });
  }, []);
  return null;
};
export default LeafletRoutingMachine;