import React from 'react';
import Chart from 'react-google-charts';

export const MySurvey = ({data}) => {
  let arr =[];
  arr.push(['survey name','Survey']);
  for (const color of data){
    // console.log(color);
    arr.push([color.servey_name,color.total_pool]);
  }
  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={arr}
      options={{
        title: 'Total Survey',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Total Pool',
          minValue: 0,
        },
        vAxis: {
          title: 'Survey Name',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};