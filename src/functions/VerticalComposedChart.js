import React, { PureComponent } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,ResponsiveContainer
} from 'recharts';

const data = [
{name:'Ahmednagar',Percent_Need_Past:4.85},
{name:'Aurangabad',Percent_Need_Past:4.55},
{name:'Mumbai City',Percent_Need_Past:25.83},
{name:'Mumbai Suburban',Percent_Need_Past:1.52},
{name:'Nagpur',Percent_Need_Past:7.49},
{name:'Pune',Percent_Need_Past:48.68},
{name:'Raigad',Percent_Need_Past:0.83},
{name:'Ratnagiri',Percent_Need_Past:2.27},
{name:'Sangli',Percent_Need_Past:0.0},
{name:'Satara',Percent_Need_Past:0.0},
{name:'Thane',Percent_Need_Past:0.83},
{name:'Yavatmal',Percent_Need_Past:3.17},

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
                <Bar dataKey="Percent_Need_Past" barSize={20}  fill="#fc5e03" />
            </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

