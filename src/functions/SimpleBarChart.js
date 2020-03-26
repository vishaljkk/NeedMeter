import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    {name:'Ahmednagar',fp:2.42},
    {name:'Aurangabad',fp:2.27},
    {name:'Mumbai City',fp:35.83},
    {name:'Mumbai Suburban',fp:0.76},
    {name:'Nagpur',fp:3.75},
    {name:'Pune',fp:18.09},
    {name:'Raigad',fp:0.41},
    {name:'Ratnagiri',fp:1.14},
    {name:'Sangli',fp:8.33},
    {name:'Satara',fp:2.08},
    {name:'Thane',fp:0.41},
    {name:'Yavatmal',fp:1.58},
];

export default class SimpleBarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

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
        <Bar dataKey="fp"  fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
