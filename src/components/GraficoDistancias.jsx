import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function GraficoDistancias(props) {
    ////Se guarda en una constante las distancias de quito sacada de los props del componente padre
    const distanciasQuito = [...props.distancias.distanciasQuito];
    ////Se ordena el contenido de "dsitanciasQuito" por orden
    distanciasQuito.sort((a, b) => b.distancia - a.distancia);

    ///Use State de las distancias para que se actualicen en tiempo real junto con los atribujos para el grafico de rEACTaPEXcHART
    const [chartState, setChartState] = useState({
        series: [distanciasQuito[0].distancia,
       distanciasQuito[1].distancia,
        distanciasQuito[2].distancia,
        distanciasQuito[3].distancia,
        distanciasQuito[4].distancia,
        distanciasQuito[5].distancia,
        distanciasQuito[6].distancia,
        distanciasQuito[7].distancia,
        distanciasQuito[8].distancia,
        distanciasQuito[9].distancia,
        distanciasQuito[10].distancia,
        distanciasQuito[11].distancia,
        distanciasQuito[12].distancia,
        distanciasQuito[13].distancia,
        ],
        options: {
            chart: {
                width: 380,
                type: 'polarArea'
            },
            labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom'
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    },
                }
            },
            theme: {
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        }
    });
   
    useEffect(() => {
        //Se actualiza el useState de CharState controlandolo con los cambios de los props a travez del useEffect, se colocan solo dos decimales 
        setChartState({
            series: [distanciasQuito[0].distancia.toFixed(2),
            distanciasQuito[1].distancia.toFixed(2),
            distanciasQuito[2].distancia.toFixed(2),
            distanciasQuito[3].distancia.toFixed(2),
            distanciasQuito[4].distancia.toFixed(2),
            distanciasQuito[5].distancia.toFixed(2),
            distanciasQuito[6].distancia.toFixed(2),
            distanciasQuito[7].distancia.toFixed(2),
            distanciasQuito[8].distancia.toFixed(2),
            distanciasQuito[9].distancia.toFixed(2),
            distanciasQuito[10].distancia.toFixed(2),
            distanciasQuito[11].distancia.toFixed(2),
            distanciasQuito[12].distancia.toFixed(2),
            distanciasQuito[13].distancia.toFixed(2),
            ],
            options:{
                chart: {
                    width: 380,
                    type: 'polarArea'
                },
                labels: [distanciasQuito[0].label,
                distanciasQuito[1].label,
                distanciasQuito[2].label,
                distanciasQuito[3].label,
                distanciasQuito[4].label,
                distanciasQuito[5].label,
                distanciasQuito[6].label,
                distanciasQuito[7].label,
                distanciasQuito[8].label,
                distanciasQuito[9].label,
                distanciasQuito[10].label,
                distanciasQuito[11].label,
                distanciasQuito[12].label,
                distanciasQuito[13].label,],
                fill: {
                    opacity: 1
                },
                stroke: {
                    width: 1,
                    colors: undefined
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        shadeIntensity: 0.6
                    }
                }
            }
        });
    }, [props.distancias]);

    return (
        //Se retorna el componente del Grafico de distancias
        <div id="chart">
            <ReactApexChart options={chartState.options} series={chartState.series} type="polarArea" width={500} />
        </div>
    );
}
export default GraficoDistancias;