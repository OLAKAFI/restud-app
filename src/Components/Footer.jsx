import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  SiLinkedin, SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si';

function Footer() {
  return (
    <>
        <div className='bg-kodepurple text-white'>


            
                <Container >
                    <Row className="row justify-content-between mobile-footer py-4">
                        
                        <Col >
                            <h5 class="texts-b">Links</h5>
                            <p><Link to="/" className="text-white text-decoration-none  texts">Home</Link></p>
                            <p><Link to="/about-us" className="text-white text-decoration-none texts">About us</Link></p>
                            <p><Link to="/contact-us" className="text-white text-decoration-none texts">Contact us</Link></p>
                            <p><Link to="/" className="text-white text-decoration-none texts">FAQ</Link></p>
                        </Col>

                        <Col >
                            <h5 className="texts-b">Services</h5>
                            <p><Link to="/" className="text-white text-decoration-none texts">Online Training</Link></p>
                            <p><Link to="/" className="text-white text-decoration-none texts">Project Management</Link></p>
                            <p><Link to="/" className="text-white text-decoration-none texts">Mentorship</Link></p>
                            <p><Link to="/" className="text-white text-decoration-none texts">Curiculum Development</Link></p>

                        </Col>
                        
                        <Col >
                            <h5><Link to="/contact-us" className="text-white text-decoration-none" >Contact</Link></h5>
                            <p className="reach"># 4700 Highway 280 East Suite 5 <br></br> Birmigham,<br></br> Shelby.</p>
                            <p ><Link to="mailto:reactlearn@gmail.com" className="text-decoration-none text-dark">restud@gmail.com</Link>  <br></br><a href="tel:+234 (0)8141848048" className="text-decoration-none text-dark">+234 (0)8141848048</a></p>
                            
                        </Col>
                        <Col >
                            <h5 className='text-center'>Follow us</h5>
                            <div className='d-flex justify-content-around text-center'>
                                <Link to="https://www.linkedin.com/company/kodecamp-team/" target="#" className="text-white text-decoration-none"><SiLinkedin/> linkedin</Link>
                                <Link to="https://web.facebook.com/kodehauzcamp/" target="#" className="text-white text-decoration-none"><SiFacebook/> facebook </Link>
                                <Link to="https://www.instagram.com/kode.camp/" target="#" className="text-white text-decoration-none"><SiInstagram/> instagram</Link>
                                <Link to="https://mobile.twitter.com/kode_camp" target="#" className="text-white text-decoration-none"> <SiTwitter/> twitter</Link>
                            
                            </div>


                        </Col>
                        
                        

                    </Row>
                </Container>

            
        </div>
    
    
    
    
    </>
  )
}

export default Footer