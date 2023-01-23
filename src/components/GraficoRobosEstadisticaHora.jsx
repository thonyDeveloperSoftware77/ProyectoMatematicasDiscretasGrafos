import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const GraficoRobosEstadisticaRobo = () => {

    //Se guarda en un UseState los datos y los atributos del grafico
    const [chartState, setChartState] = useState({
        //valores de los procentajes
        series: [16.7, 23.7, 27.1, 32.4],
        ///atributos utiles para el grafico
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            //Labels que corresponden a los datos
            labels: [
                "Madrugada",
                "Dia",
                "Tarde",
                "Noche"
            ],
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            title: {
                text: 'Robos por horario Porcentaje%'
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    });

    //Se retorna el componente usando los atributos de opciones y series que estan definidos por el useState de chartSate
    return (
        <div id="chart">
            <ReactApexChart options={chartState.options} series={chartState.series} type="donut" width={450} />
        </div>
    );
}
export default GraficoRobosEstadisticaRobo;