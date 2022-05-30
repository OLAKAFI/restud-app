import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function MyNavBar() {
  return (
    <>
        <Navbar className='bg-kodepurple'>
            <Container className='container-fluid'>
                <Navbar.Brand >
                    <Link to="/" className='text-decoration-none text-white'>  ReStud </Link>
               
                </Navbar.Brand>

                <Button variant="outline-light">
                  
                  <Link to="/login" className='text-decoration-none text-dark'>  Login </Link>
                </Button>
            </Container>
        </Navbar>
    
    
    
    
    </>
  )
}

export default MyNavBar