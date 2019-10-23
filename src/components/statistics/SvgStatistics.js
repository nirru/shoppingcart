import React from 'react';
import Chart from 'react-google-charts';

export const MyCompo = ({data}) => {
  // console.log(data[0].total_users);
  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Total Pool', data[0].total_pool.toString()],
        ['Total Completed Pool', data[0].total_completed_pool],
        ['Total Failed Pool', data[0].total_failed_pool],
        ['Total Pending Pool', data[0].total_pending_pool],
      ]}
      options={{
        title: 'Pool Statistics',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};