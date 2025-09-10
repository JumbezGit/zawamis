import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the statistics graph
const data = [
  { name: 'Jan', clicks: 400, sales: 240, Depts: 240 },
  { name: 'Feb', clicks: 300, sales: 139, Depts: 240 },
  { name: 'Mar', clicks: 200, sales: 980, Depts: 240 },
  { name: 'Apr', clicks: 278, sales: 390, Depts: 240 },
  { name: 'May', clicks: 189, sales: 480, Depts: 240 },
  { name: 'Jun', clicks: 239, sales: 380, Depts: 240 },
];

const StatisticsGraph = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Depts" fill="#ff9a00" />
          <Bar dataKey="clicks" fill="#8884d8" />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsGraph;