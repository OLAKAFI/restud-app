import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import './sidebar.css';



export default props => {
  return (
    <Menu>
        <div className='mb-4'>Menu</div>
        
        <Link to="/profile" className="menu-item text-decoration-none text-light border border-1" >Profile Page</Link>
        <Link to="/dashboard" className="menu-item text-decoration-none text-dark" >Courses</Link>
        <Link to="/dashboard" className="menu-item text-decoration-none text-dark" >Go to Dashboard</Link>
        {/* <Logout/> */}

    </Menu>
  );
};