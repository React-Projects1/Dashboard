import React from 'react';
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = ({ aspect ,title }) => {
    const data = [
        {
            name: 'January',
            Total: 1200,
        },
        {
            name: 'February',
            Total: 2100,
        },
        {
            name: 'March',
            Total: 500,
        },
        {
            name: 'April',
            Total: 1600,
        },
        {
            name: 'May',
            Total: 900,
        },
        {
            name: 'June',
            Total: 1700,
        },

    ];
    return (
        <div className='chart'>

            <div className='title'>Last 6 Months (Revenue) </div>
            <ResponsiveContainer width='100%'aspect={aspect} title={title} >
                <AreaChart width={760} height={350} data={data}
                    margin={{ top: 15, right: 15, left: 0, bottom: 15 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" className='grid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

                </AreaChart>
            </ResponsiveContainer>



        </div>
    );
}

export default Chart;
