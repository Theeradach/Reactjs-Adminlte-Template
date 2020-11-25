import React, { Component } from 'react'
import Datatable from './Tables/Datatable'

export default class ContentTable extends Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = 'js/content.js';
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1 className="m-0 text-dark">Dashboard v3</h1>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                            <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Dashboard v3</li>
                        </ol>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header border-0">
                            <div className="d-flex justify-content-between">
                                <h3 className="card-title">Online Store Visitors</h3>
                                <a href="javascript:void(0);">View Report</a>
                            </div>
                            </div>
                            <div className="card-body">
                                <Datatable/>
                            </div>
                        </div>
                        </div>
                        {/* /.col-md-6 */}
                    </div>
                    {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
        );
    }
}
