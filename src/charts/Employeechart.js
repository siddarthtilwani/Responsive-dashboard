import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Employeechart() {
  return (
    <div>
        
    <LineChart
      xAxis={[{ data: [120, 122.4, 124.9, 127.5, 130.2, 133]}]}
      series={[
        {
          data: [96, 99.92, 102.92, 101, 102.1, 105.92],
          showMark:false,
          
          
        },
      ]}
      width={150}
      height={150}
      
    />
   
    </div>
  );
}
