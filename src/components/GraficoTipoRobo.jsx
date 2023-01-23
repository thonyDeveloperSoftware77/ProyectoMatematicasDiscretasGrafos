import React from 'react';
import ReactApexChart from 'react-apexcharts';

function GraficoTiposRobo() {
  //Grafico de barra de los tipos de robo en el periodo 2020,2021,2022
  const series = [    
    { name: 'Robo a personas', 
      data: [4668, 5715, 4508]
    },
    {
      name: 'Robo de bienes, accesorios y autopartes',
      data: [2172, 2961, 1891]
    },
    {
      name: 'Robo de carros',
      data: [1245, 1608, 1266]
    },
    { name: 'Robos a domicilio', 
      data: [1385, 1526, 1030]
    },
    {
      name: 'Robo de unidades economicas',
      data: [1277, 1539, 972]
    },
    {
      name: 'Robo de Motos',
      data: [1006, 1207, 820]
    }
    
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Tipos de robo por periodo'
    },
    xaxis: {
      categories: ['2020', '2021', '2022'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val} Robos`;
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  };

  //Se renderiza el componente junto con las opciones y atributos del objeto series
  return (
    <div id="chart" className='centrarMapa'>
      <ReactApexChart options={options} series={series} type="bar" width={1000} height={400} />
    </div>
  );
}

export default  GraficoTiposRobo;