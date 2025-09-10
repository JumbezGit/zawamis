import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatisticsGraph from './StatisticsGraph';

function UserDash() {
return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">Primary info</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">Success info</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-warning">
                    <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">Warning info</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-danger">
                    <div className="card-body">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">Danger info</p>
                    </div>
                </div>
            </div>
        </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Statistics</h5>
                                <StatisticsGraph />
                            </div>
                        </div>
                    </div>
                </div>

    </div>
    
)
}

export default UserDash