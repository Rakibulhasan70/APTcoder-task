import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarCharts = () => {
    const data = [
        {
            name: 'Jan',
            USA: 4000,
            UK: 2400,
            China: 2400,
        },
        {
            name: 'Feb',
            USA: 3000,
            UK: 1398,
            China: 2210,
        },
        {
            name: 'Mar',
            USA: 2000,
            UK: 9800,
            China: 2290,
        },
        {
            name: 'Apr',
            USA: 2780,
            UK: 3908,
            China: 2000,
        },
        {
            name: 'May',
            USA: 1890,
            UK: 4800,
            China: 2181,
        },
        {
            name: 'Jun',
            USA: 2390,
            UK: 3800,
            China: 2500,
        },
        {
            name: 'July',
            USA: 3490,
            UK: 4300,
            China: 2100,
        },
    ];
    return (
        <BarChart width={480} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="UK" fill="#8884d8" />
            <Bar dataKey="USA" fill="#82ca9d" />
            <Bar dataKey="China" fill="#CD5C5C" />
        </BarChart>
    );
};

export default BarCharts;