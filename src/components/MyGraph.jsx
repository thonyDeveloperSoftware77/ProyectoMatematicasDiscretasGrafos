import React, { useEffect, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import GraficoDistancias from './GraficoDistancias';

const MyGraph = () => {
  let contador = 0;

  //UseState que contiene un objeto de nodos que representan los lugares mas peligrosos de quito geograficamente
  const [graphData, setGraphData] = useState({
    nodes: [
      { id: 'node1', label: 'Su posición', fx: -199, fy: 240, nodeDraggable: true },
      { id: 'node2', label: 'La Marin', fx: -33, fy: -111, nodeDraggable: false },
      { id: 'node3', label: 'La Roldos', fx: -442, fy: -85, nodeDraggable: false },
      { id: 'node4', label: 'El Condado', fx: -358, fy: -25, nodeDraggable: false },
      { id: 'node5', label: 'Atucucho', fx: -323, fy: 23, nodeDraggable: false },
      { id: 'node6', label: 'Comite del pueblo', fx: -155, fy: -61, nodeDraggable: false },

      { id: 'node7', label: 'Occidental y Carlos V', fx: -343, fy: 52, nodeDraggable: false },
      { id: 'node8', label: 'Occidental y Carvajal', fx: -350, fy: 80, nodeDraggable: false },
      { id: 'node9', label: '6 de Diciembre y Shirys', fx: -193, fy: 43, nodeDraggable: false },
      { id: 'node10', label: 'Eloy Alfaro y Granados', fx: -184.5, fy: 94, nodeDraggable: false },

      { id: 'node11', label: 'Redondel del ciclista', fx: -172.288, fy: 64, nodeDraggable: false },
      { id: 'node12', label: 'Redondel MiraFlores', fx: -427, fy: 238, nodeDraggable: false },
      { id: 'node13', label: 'San Juan', fx: -436, fy: 269, nodeDraggable: false },
      { id: 'node14', label: 'San Roque', fx: -462, fy: 295, nodeDraggable: false },

      { id: 'node16', label: 'Chillogallo', fx: -513, fy: 474, nodeDraggable: false },
    ],

    //Enlaces de los nodos al nodo1 es decir  unidos a la posicion del usuario
    links: [
      { source: 'node1', target: 'node2' },
      { source: 'node1', target: 'node3' },
      { source: 'node1', target: 'node4' },
      { source: 'node1', target: 'node5' },
      { source: 'node1', target: 'node6' },
      { source: 'node1', target: 'node7' },
      { source: 'node1', target: 'node8' },
      { source: 'node1', target: 'node9' },
      { source: 'node1', target: 'node10' },
      { source: 'node1', target: 'node11' },
      { source: 'node1', target: 'node12' },
      { source: 'node1', target: 'node13' },
      { source: 'node1', target: 'node14' },
      { source: 'node1', target: 'node16' },
    ],

  });

  //UseState que representa las distancias hacia los nodos de los lugares mas peligrosos
  const [distancias, setDistancias] = useState({
    distanciasQuito: [

      { id: 'node2', label: 'La Marin', distancia: 0 },
      { id: 'node3', label: 'La Roldos', distancia: 0 },
      { id: 'node4', label: 'El Condado', distancia: 0 },
      { id: 'node5', label: 'Atucucho', distancia: 0 },
      { id: 'node6', label: 'Comite del pueblo', distancia: 0 },
      { id: 'node7', label: 'Occidental y Carlos V', distancia: 0 },
      { id: 'node8', label: 'Occidental y Carvajal', distancia: 0 },
      { id: 'node9', label: '6 de Diciembre y Shirys', distancia: 0 },
      { id: 'node10', label: 'Eloy Alfaro y Granados', distancia: 0 },
      { id: 'node11', label: 'Redondel del ciclista', distancia: 0 },
      { id: 'node12', label: 'Redondel MiraFlores', distancia: 0 },
      { id: 'node13', label: 'San Juan', distancia: 0 },
      { id: 'node14', label: 'San Roque', distancia: 0 },
      { id: 'node16', label: 'Chillogallo', distancia: 0 },


    ]

  }
  )



  // Para obtener la distancia entre los nodos enlazados, puedes implementar la siguiente función: 
  const getDistance = (nodeId1, nodeId2) => {
    const node1 = graphData.nodes.find(node => node.id === nodeId1);
    const node2 = graphData.nodes.find(node => node.id === nodeId2);
    const xDist = Math.abs((node1.fx)*50 - (node2.fx)*50);
    const yDist = Math.abs((node1.fy)*50 - (node2.fy)*50);
    const distancia = Math.sqrt(xDist * xDist + yDist * yDist);
    return distancia
  };




  //Se calculam las distancias entre los nodos
  const calculateDistancias = () => {

    const distanceElTrebol = getDistance('node1', 'node2');
    const distanceLaRoldos = getDistance('node1', 'node3');
    const distanceCondado = getDistance('node1', 'node4');
    const distanceAtucucho = getDistance('node1', 'node5');
    const distanceComite = getDistance('node1', 'node6');
    const distanceOccidentalCarlos = getDistance('node1', 'node7');
    const distanceOccidentalCarvajal = getDistance('node1', 'node8');
    const distanceSeisDeDiciembre = getDistance('node1', 'node9');
    const distanceEloyALFARO = getDistance('node1', 'node10');
    const distanceRedondelCiclista = getDistance('node1', 'node11');
    const distanceRedondelMiraflores = getDistance('node1', 'node12');
    const distanceSanJuan = getDistance('node1', 'node13');
    const distanceSanRoque = getDistance('node1', 'node14');
    const distanceChillogallo = getDistance('node1', 'node16');

    //Se setean las distancias en el use State para que se actualice entiepo real
    setDistancias({
      distanciasQuito: [

        { id: 'node2', label: 'La Marin', distancia: distanceElTrebol },
        { id: 'node3', label: 'La Roldos', distancia: distanceLaRoldos },
        { id: 'node4', label: 'El Condado', distancia: distanceCondado },
        { id: 'node5', label: 'Atucucho', distancia: distanceAtucucho },
        { id: 'node6', label: 'Comite del pueblo', distancia: distanceComite },
        { id: 'node7', label: 'Occidental y Carlos V', distancia: distanceOccidentalCarlos },
        { id: 'node8', label: 'Occidental y Carvajal', distancia: distanceOccidentalCarvajal },
        { id: 'node9', label: '6 de Diciembre y Shirys', distancia: distanceSeisDeDiciembre },
        { id: 'node10', label: 'Eloy Alfaro y Granados', distancia: distanceEloyALFARO },
        { id: 'node11', label: 'Redondel del ciclista', distancia: distanceRedondelCiclista },
        { id: 'node12', label: 'Redondel MiraFlores', distancia: distanceRedondelMiraflores },
        { id: 'node13', label: 'San Juan', distancia: distanceSanJuan },
        { id: 'node14', label: 'San Roque', distancia: distanceSanRoque },
        { id: 'node16', label: 'Chillogallo', distancia: distanceChillogallo },
      ]
    });
  }




  const graphRef = useRef(null);
  useEffect(() => {
    calculateDistancias();
  }, [graphData]);



  //Se actualiza la posicion cada vez que el usuario mueva el nodo 
  const onNodeDragEnd = (node) => {
    const newGraphData = { ...graphData };
    const updatedNode = newGraphData.nodes.find((n) => n.id === node.id);
    updatedNode.fx = node.x;
    updatedNode.fy = node.y;
    setGraphData(newGraphData);//Se setean los nuevos datos en el componente

  };


  return (
    <div className='centrarMapa'>
      <div style={{ width: "25%", marginRight: "20px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

        <div>
          <h2 style={{ fontSize: "45px" , backgroundColor: "#1B262C", color: "white",}}><center>Informacion</center></h2>
          <p>
            <br></br>
            A continuación se muestra un grafo cuyos nodos grises representan las ubicaciones de los sitios más peligrosos de Quito y el nodo azul representa su ubicación, el grafo es dinámico, es decir que el nodo AZUL puede moverse por el lienzo del grafo y cambia de color segun este cerca de zonas peligrosas.
          </p>
          <br></br>
          <h2><center>Estado</center></h2>
          <br></br>
          {/*Usador para ver cuantos lugares peligrosos son cercanos*/}
          {distancias.distanciasQuito.map((lugar, index) => {
            //Condicion para que se aumenten los lugares peligrosos cada vez que el nodo sea menor a 3km
            if (lugar.distancia < 3000 && lugar.distancia > 0) {
              contador++;
            } else if (index == 13) {//condicion para cuando este en las ultimas iteraciones
              if (contador == 0) {
                return <p>✔️No hay sitios peligrosos</p>
              } else {
                return <p >Número de lugares peligrosos: {contador}</p>//Imprime el numero de los lugares peligrosos cercanos al nodo
              }
            }
          })}

          <br></br>


          {/*Usador para saber cuales son los lugares peligrosos cercanos*/}
          {distancias.distanciasQuito.map((lugar, index) => {
            //Condicion para mostrar cuales son los lugares peligrosos cercanos
            if (lugar.distancia < 3000 && lugar.distancia > 0) {

              return <h3 key={index}>⛔ Sitio inseguro: {lugar.label}</h3>

            }
          })}

        </div>
        {/*SE RENDERIZA EL GRAFICO DE LAS DISTANCIAS*/}
        <div>
          <h2 style={{ backgroundColor: "#1B262C", color: "white", padding:"10px"}}>Distancias de lugares Peligrosos (metros)</h2>
          <GraficoDistancias distancias = {distancias}/>
        </div>

      </div>


      
      <div className="containerGrafo">
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          nodeLabel="label"
          nodeAutoColorBy='label'
          nodeCanvasObject={(node, ctx, globalScale) => {

            // dibuja el texto del label sobre el nodo
            ctx.font = "12px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(node.label, node.x + 2, node.y - 10);
           
            //SI LOS NODOS CONA LA PROPIEDAD nodeDraggable son falsos los nodos seran de color gris
            if (!node.nodeDraggable) {
              ctx.fillStyle = 'gray';
              ctx.beginPath();
              ctx.arc(node.x, node.y, 7, 0, 80);
              ctx.fill();
            } else if (node.id === 'node1') {// 
              ctx.fillStyle = 'blue';
              ctx.beginPath();
              ctx.arc(node.x, node.y, 11, 0, 2 * Math.PI);
              ctx.fill();
              {
                distancias.distanciasQuito.map((lugar, index) => {
                  if (lugar.distancia < 3000 && lugar.distancia > 0) {

                    ctx.fillStyle = 'red';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 11, 0, 2 * Math.PI);
                    ctx.fill();

                  } else if (contador == 1) {
                    ctx.fillStyle = 'black';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 11, 0, 2 * Math.PI);
                    ctx.fill();
                  }
                })
              }


            }
          }}
          linkCanvasObject={(link, ctx, globalScale) => {
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#008FFB';
            ctx.beginPath();
            ctx.moveTo(link.source.x, link.source.y);
            ctx.lineTo(link.target.x, link.target.y);
            ctx.stroke();
        }}
          onNodeDragEnd={onNodeDragEnd}
        />
      </div>




    </div>


  );
};

export default MyGraph;
