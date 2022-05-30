import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import techsupport from './images/tech-support.png';
import "../src/App.css";;

function Home() {
  return (
    <>
        <Container>
            <Row className='py-5 vh-100'>
                <Col className='my-auto'>
                    <div className='col-10'>
                        <h1 className='display-3 fw-bold text-dark'><span className='kodegreen'>Learn</span> on your Class Schedule</h1>
                        <p>This is a platform where you learn the fundermentals of every course and their applications in everyday life</p>
                    </div>
                </Col>
                <Col className='d-none d-md-block'>
                    <div className='img-fluid'>
                        <img src={techsupport} alt="" srcset="" className='img-fluid' />
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home