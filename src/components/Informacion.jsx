
import React, { useEffect, useState, useRef } from 'react';

function Informacion(props) {

  return (
    <div >
      <h2 style={{ fontSize: "45px", color: "#1B262C" }}><center>Informacion</center></h2>
      <br />
      <br />
      <p>
        El mapa presentado es dinámico, puedes crear marcadores dentro del mapa y te saltará una alerta en caso de que hallan lugares cercarnos peligrosos dentro de la ciudad de Quito, se mostrará el lugar y la distancia entre el marcador que coloques y el sitio peligroso más cercano
      </p>

    </div>
  );
}

export default Informacion;