import React from 'react';
import Chart from 'react-google-charts';

export const UserCompo = ({data}) => {
  // console.log(data[0].total_users);
  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Total User', data[0].total_users.toString()],
        ['Active User', data[0].active_users],
        ['InActive User', data[0].total_users - data[0].active_users],
      ]}
      options={{
        title: 'User Statistics',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};