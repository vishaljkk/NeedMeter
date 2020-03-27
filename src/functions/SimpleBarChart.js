import React, { PureComponent } from 'react';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer
} from 'recharts';

const data = [
  {name:'Ahmednagar',fp:-1.84},
  {name:'Aurangabad',fp:0.02},
  {name:'Mumbai City',fp:32.83},
  {name:'Mumbai Suburban',fp:1.32},
  {name:'Nagpur',fp:3.43},
  {name:'Pune',fp:7.57},
  {name:'Raigad',fp:0.4},
  {name:'Ratnagiri',fp:0.0},
  {name:'Sangli',fp:48.47},
  {name:'Satara',fp:-0.05},
  {name:'Thane',fp:5.69},
  {name:'Yavatmal',fp:0.26},
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="fp" fill="#fc5e03" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
