import React, { PureComponent } from 'react';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer
} from 'recharts';

const data = [
  {name:'Ahmednagar',dp:0.0},
  {name:'Aurangabad',dp:0.0},
  {name:'Mumbai City',dp:68.75},
  {name:'Mumbai Suburban',dp:0.0},
  {name:'Nagpur',dp:0.0},
  {name:'Pune',dp:-18.75},
  {name:'Raigad',dp:0.0},
  {name:'Ratnagiri',dp:0.0},
  {name:'Sangli',dp:25.0},
  {name:'Satara',dp:6.25},
  {name:'Thane',dp:0.0},
  {name:'Yavatmal',dp:0.0},
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
        <Bar dataKey="dp" fill="#fc5e03" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
