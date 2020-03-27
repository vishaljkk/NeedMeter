import React, { PureComponent } from 'react';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer
} from 'recharts';

const data = [
  {name:'Ahmednagar',fp:-2.48},
  {name:'Aurangabad',fp:2.27},
  {name:'Mumbai City',fp:12.91},
  {name:'Mumbai Suburban',fp:0.76},
  {name:'Nagpur',fp:3.75},
  {name:'Pune',fp:9.63},
  {name:'Raigad',fp:0.41},
  {name:'Ratnagiri',fp:1.14},
  {name:'Sangli',fp:24.51},
  {name:'Satara',fp:-4.9},
  {name:'Thane',fp:5.32},
  {name:'Yavatmal',fp:1.58},
];

export default class PositiveNegativeChart extends PureComponent {

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
