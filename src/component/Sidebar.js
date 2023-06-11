import React from 'react'
import {Link, useNavigate} from "react-router-dom"

function Sidebar() {
    let nav=useNavigate()
    return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >

            <div className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </div>
            
            <hr className="sidebar-divider my-0" />

            <Link to ='/dashboard' >
            <li className="nav-item active">
                <div className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></div>
            </li>

            </Link>
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <Link to='/add-user'>
            <li className="nav-item">
                <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-user fa-2xs"></i>
                    <span>Add User</span>
                </div>
            </li>
            </Link> 

            <Link to='/profile'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-address-card fa-2xs"></i>
                    <span>Profile</span>
                </div>
            </li>
            </Link>
            <Link to='/Addprofile'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-address-card fa-2xs"></i>
                    <span>Add Profile</span>
                </div>
            </li>
            </Link>
{/* useNavigate hook is not given underlin link component give underline like link tag */}
            <li className="nav-item" onClick={()=>nav('/task')}>
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-list-check fa-2xs"></i>
                    <span>Task</span>
                </div>
            </li>

            <Link to='/pending'>
            <li className="nav-item">
                <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fa-solid fa-rotate fa-2xs"></i>
                    <span>Pending Request</span>
                </div>
            </li>
            </Link>
        </ul >
    </>
}

export default Sidebar