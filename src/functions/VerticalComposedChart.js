import React, { PureComponent } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,ResponsiveContainer
} from 'recharts';

const data = [
    {name:'Ahmednagar',op:4.85},
    {name:'Aurangabad',op:4.55},
    {name:'Mumbai City',op:25.83},
    {name:'Mumbai Suburban',op:1.52},
    {name:'Nagpur',op:7.49},
    {name:'Pune',op:48.68},
    {name:'Raigad',op:0.83},
    {name:'Ratnagiri',op:2.27},
    {name:'Sangli',op:0.0},
    {name:'Satara',op:0.0},
    {name:'Thane',op:0.83},
    {name:'Yavatmal',op:3.17},
];

export default class VerticalComposedChart extends PureComponent {

  render() {
    return (
        <ResponsiveContainer>
            <ComposedChart
                layout="vertical"
                width={400}
                height={250}
                data={data}
                margin={{
                top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5"/>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="op" barSize={20}  fill="#fc5e03" />
            </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

