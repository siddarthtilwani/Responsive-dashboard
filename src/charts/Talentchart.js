import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Hidden } from '@mui/material';

export default function Employeechart() {
  return (
    <div>
        
    <LineChart
      xAxis={[{ data: [6,6.2,7.1,8.2,8.9,9]}]}
      series={[
        {
          data: [10,10.2,15,11.4,12.9,16],
          showMark:false,
          
          
        },
      ]}
      width={150}
      height={150}
      
    />
    </div>
  );
}
