import React, { PureComponent } from 'react';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,ResponsiveContainer
} from 'recharts';

const data = [
  {name:'Ahmednagar',Percent_Need_Overall:-2.48},
  {name:'Aurangabad',Percent_Need_Overall:2.27},
  {name:'Mumbai City',Percent_Need_Overall:12.91},
  {name:'Mumbai Suburban',Percent_Need_Overall:0.76},
  {name:'Nagpur',Percent_Need_Overall:3.75},
  {name:'Pune',Percent_Need_Overall:9.63},
  {name:'Raigad',Percent_Need_Overall:0.41},
  {name:'Ratnagiri',Percent_Need_Overall:1.14},
  {name:'Sangli',Percent_Need_Overall:24.51},
  {name:'Satara',Percent_Need_Overall:-4.9},
  {name:'Thane',Percent_Need_Overall:5.32},
  {name:'Yavatmal',Percent_Need_Overall:1.58},
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
        <Bar dataKey="Percent_Need_Overall" fill='#8884d8' />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
