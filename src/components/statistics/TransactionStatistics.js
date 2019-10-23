import React from 'react';
import Chart from 'react-google-charts';

export const TransactionCompo = ({data}) => {
  // console.log(data);
  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Total', 'Total'],
        ['Total Credit', data[0].total_credits],
        ['Total Debit', data[0].total_debits],
      ]}
      options={{
        title: 'Transaction Statistics',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};