import React, { PureComponent } from 'react';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer
} from 'recharts';

const data = [
  {name:'Ahmednagar',Percent_Sudden_Need:-1.84},
  {name:'Aurangabad',Percent_Sudden_Need:0.02},
  {name:'Mumbai City',Percent_Sudden_Need:32.83},
  {name:'Mumbai Suburban',Percent_Sudden_Need:1.32},
  {name:'Nagpur',Percent_Sudden_Need:3.43},
  {name:'Pune',Percent_Sudden_Need:7.57},
  {name:'Raigad',Percent_Sudden_Need:0.4},
  {name:'Ratnagiri',Percent_Sudden_Need:0.0},
  {name:'Sangli',Percent_Sudden_Need:48.47},
  {name:'Satara',Percent_Sudden_Need:-0.05},
  {name:'Thane',Percent_Sudden_Need:5.69},
  {name:'Yavatmal',Percent_Sudden_Need:0.26},
];

export default class SimpleBarChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer>
      <BarChart
        width={400}
        height={250}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
      <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5"/>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Percent_Sudden_Need" fill='#8884d8' />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
