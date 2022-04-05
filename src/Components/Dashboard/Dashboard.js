import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposedChart, BarChart, Bar, Cell } from 'recharts';

import { useEffect, useState } from 'react';
import useGraphdata from '../../hooks/useGraphdata';


const Dashboard = () => {
    const [data, setData] = useGraphdata();

    return (
        <div>

            <div className="container mt-5">
                <div className="row my-4 g-4">
                    <div className="col-md-6">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                    <div className="col-md-6">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                            </AreaChart>
                        </ResponsiveContainer>


                    </div>

                    <div className="col-md-6">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                                <Bar dataKey="investment" stackId="a" fill="#FA1C9B" />
                            </BarChart>
                        </ResponsiveContainer>

                    </div>

                    <div className="col-md-6">
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="month" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default Dashboard;