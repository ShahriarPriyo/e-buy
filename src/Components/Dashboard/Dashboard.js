import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import { useEffect, useState } from 'react';


const Dashboard = () => {
    const [covidData, setcovidData] = useState(null);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcovidData(data))
    }, []);
    return (
        <div>
            {/* <h1>This is Dashboard</h1> */}
            <LineChart width={600} height={300} data={covidData}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
            </LineChart>

            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={covidData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="sell" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Dashboard;