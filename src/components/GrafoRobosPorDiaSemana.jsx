import React, { useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useWindowSize } from '@react-hook/window-size';

const GrafoRobosPorDiaSemana = () => {

    //Importante para poder renderizar el width del grafo con un tamanio personalizado
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
    const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

    window.addEventListener('resize', () => {
        setDisplayWidth(window.innerWidth);
        setDisplayHeight(window.innerHeight);
    });

    // Creamos los nodos junto con los datos como la posicion, el label y la informacion.
    const nodes = [

        //NODOS QUE REPRESENTAN LOS DIAS DE LA SEMANA
        { id: 'Lunes', label: "Lunes", fx: 0, fy: -200, info:"Madrugada: 944, Mañana: 2176, Tarde: 2220, Noche:2214" },
        { id: 'Martes', label: "Martes", fx: 150, fy: -150 , info: "Madrugada: 937, Mañana: 2039, Tarde: 2326, Noche:2469"},
        { id: 'Miercoles', label: "Miercoles", fx: 200, fy: 150 , info: "Madrugada: 1193, Mañana: 2067, Tarde: 2400, Noche:2759"},
        { id: 'Jueves', label: "Jueves", fx: 75, fy: 250 , info: "Madrugada: 1229, Mañana: 2179, Tarde: 2336, Noche:3106"},
        { id: 'Viernes', label: "Viernes", fx: -75, fy: 250 , info: "Madrugada: 1524, Mañana: 2137, Tarde: 2545, Noche:3778"},
        { id: 'Sabado', label: "Sabado", fx: -200, fy: 150 , info: "Madrugada: 2033, Mañana: 1708, Tarde: 2078, Noche:2839"},
        { id: 'Domingo', label: "Domingo", fx: -150, fy: -150 , info: "Madrugada: 1679, Mañana: 1252, Tarde: 1591, Noche:1367"},

        //NODOS QUE REPRESENTAN LOS MOMENTOS DEL DIA EN EL QUE SE REALIZAN ASALTOS
        { id: 'Madrugada:944',  label: "Madrugada",fx: -200, fy: 0 , info: ""},
        { id: 'Dia:2176',  label: "Dia",fx: -50, fy: 0 , info: ""},
        { id: 'Tarde:2220',  label: "Tarde",fx: 100, fy: 0 , info: ""},
        { id: 'Noche:2214',  label: "Noche",fx: 200, fy: 0 , info: ""},


    ];

    // Creamos los enlaces que unen los nodos
    const links = [
        { source: 'Lunes', target: 'Madrugada:944', label: "165164848" },
        { source: 'Lunes', target: 'Dia:2176', label: "165164848" },
        { source: 'Lunes', target: 'Tarde:2220', label: "165164848" },
        { source: 'Lunes', target: 'Noche:2214', label: "165164848" },

        { source: 'Martes', target: 'Madrugada:944' },
        { source: 'Martes', target: 'Dia:2176' },
        { source: 'Martes', target: 'Tarde:2220' },
        { source: 'Martes', target: 'Noche:2214' },


        { source: 'Miercoles', target: 'Madrugada:944' },
        { source: 'Miercoles', target: 'Dia:2176' },
        { source: 'Miercoles', target: 'Tarde:2220' },
        { source: 'Miercoles', target: 'Noche:2214' },



        { source: 'Jueves', target: 'Madrugada:944' },
        { source: 'Jueves', target: 'Dia:2176' },
        { source: 'Jueves', target: 'Tarde:2220' },
        { source: 'Jueves', target: 'Noche:2214' },

        { source: 'Viernes', target: 'Madrugada:944' },
        { source: 'Viernes', target: 'Dia:2176' },
        { source: 'Viernes', target: 'Tarde:2220' },
        { source: 'Viernes', target: 'Noche:2214' },


        { source: 'Sabado', target: 'Madrugada:944' },
        { source: 'Sabado', target: 'Dia:2176' },
        { source: 'Sabado', target: 'Tarde:2220' },
        { source: 'Sabado', target: 'Noche:2214' },

        { source: 'Domingo', target: 'Madrugada:944' },
        { source: 'Domingo', target: 'Dia:2176' },
        { source: 'Domingo', target: 'Tarde:2220' },
        { source: 'Domingo', target: 'Noche:2214' },
      
    ];

    return (

        //REPRESENTACION DEL GRAFO CON LA INFORMACION PROPORCIONADA EN EL OBJETO NODO Y EL OBJETO LINKS
        <div style={{ width: "100%", borderStyle: "dashed" , backgroundColor: "#1B262C"}}>
            <ForceGraph2D
                width={700}
                height={600}
                linkDistance={200}
                linkDirectionalArrowLength={10}

                graphData={{ nodes, links }}
                nodeCanvasObject={(node, ctx,link, globalScale) => {
                    ctx.font = "13px Arial";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText(node.label, node.x + 2, node.y - 10);
                    
                
                    //CONDICION PARA QUE SE MUESTRE LA INFORMACION EN EL CASO DE QUE EL HOVER ESTE ACTIVO
                    if (node.hover) {
                        ctx.fillText(node.info, node.x + 2, node.y - 28);
                      }
                    ctx.beginPath();
                    ctx.fillStyle = 'red';
                    ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.strokeStyle = "blue"
                   

                }}
                //FUNCION QUE SE UTILIZA PARA MOSTRAR LA INFRMACION 
                onNodeHover={node => {
                    if (node) {
                      node.hover = true;
                    } else {
                      nodes.forEach(n => n.hover = false);
                    }
                  }}
                linkColor='blue'
                linkWidth={2}
                linkCanvasObject={(link, ctx, globalScale) => {
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = 'blue';
                    ctx.beginPath();
                    ctx.moveTo(link.source.x, link.source.y);
                    ctx.lineTo(link.target.x, link.target.y);
                    ctx.stroke();
                }}



            />
        </div>

    );
};

export default GrafoRobosPorDiaSemana;