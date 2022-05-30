
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { SiGoogle, SiGmail } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { auth, db, logout } from "./firebase";
import {Button} from 'react-bootstrap';




import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logout from './Logout';





function NewSlideBar() {
    const navigate = useNavigate();
  return (
    <> 
       <div className='h-100 sidebarborder  ' style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
            <CDBSidebar className="sidebarborder" textColor="#fff" backgroundColor="#669e00">
                <CDBSidebarHeader   prefix={<i className="fa fa-bars fa-large text-dark"></i>}>
                    <Link to="/" className="text-decoration-none text-dark" style={{ color: 'inherit' }}>
                        ReStud
                    </Link>
                </CDBSidebarHeader>

                <div className='h-100'>
                    <CDBSidebarContent className="sidebar-content h-100 ">
                        <CDBSidebarMenu>
                            <NavLink exact to="/" activeClassName="activeClicked" className="">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/dashboard" activeClassName="activeClicked" className="">
                                <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/profile" activeClassName="activeClicked" className="">
                                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                            </NavLink>
                            <Link  to="/mycourse">
                                <CDBSidebarMenuItem icon="book">Courses</CDBSidebarMenuItem>
                            </Link>
                            
                        
                            <Logout/>
                        
                            

                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </div>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    
                    ReStud
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>


       
    
    
    
    </>
  )
}

export default NewSlideBar