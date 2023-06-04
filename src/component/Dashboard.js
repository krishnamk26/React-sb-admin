import React from 'react'
import Card from './Card'

function Dashboard() {
    let data = [
        {
            title: "EARNING (MONTHLY)",
            value: "40,000",
            color: "primary",
            icon:"fa-calendar",
            isPrograss:false,
        },
        {
            title: "EARNING (ANNUAL)",
            value: "2,15,000",
            color: "success",
            icon:"fa-dollar-sign",
            isPrograss:false,
        },
        {
            title: "TASKS",
            value: "65",
            color: "info",
            icon:"fa-clipboard",
            isPrograss:true,
        },
        {
            title: "PENDING REQUESTS",
            value: "18",
            color: "warning",
            icon:"fa-comments",
            isPrograss:false,
        }
    ]
    return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">

                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                        {
                            data.map((e, i) => {
                                return <Card key={i}
                                   let values = {e}

                                />
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Dashboard