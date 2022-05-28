import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { SiGoogle, SiGmail } from "react-icons/si";
import loginimage from '../images/login.png';
import "../App.css";







function Login() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (loading) return;
    if (user) navigate("/profile");
    
  }, [user, loading,navigate]);
  return (
      <>
        

        <div className='py-3'>
            <Container className="border border-1  my-5 rounded shadow-lg bg-white " >
                <Row className="">
                    <Col className="d-none d-md-block col-md-4">
                        <div className='img-fluid text-center text-white'>
                            <h1>Student Login</h1>
                            <p>Make sure your account is secured</p>

                            <img src={loginimage} alt="" className='img-fluid' style={{ height: '35rem' }} />
                        </div>
                        
                    </Col>
                    <Col className='my-auto'>
                        <div className=''>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text"
                                        className="login__textBox"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="E-mail Address" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  type="password"
                                        className="login__textBox"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password" />
                                        
                                        <div className="d-flex mt-2">
                                            <div>
                                                <Link to="/reset" className="text-danger text-decoration-none">Reset</Link>
                                            </div>
                                            <div className="ms-auto ">
                                                Don't have an account? <Link to="/register" className="kodepurple text-decoration-none">Register</Link> now.
                                            </div>
                                        
                                        
                                        </div>
                                </Form.Group>

                                
                                <Form.Group className="mt-5">
                                    
                                    <div className="d-grid gap-2">
                                        <Button variant="success"  size="lg" onClick={() => logInWithEmailAndPassword( email, password)}>
                                            Login
                                        </Button>
                                        <Button variant="secondary"  size="lg" onClick={signInWithGoogle}>
                                            <span><SiGoogle/> </span> <span><SiGmail/> </span>    Login with Google
                                        </Button>
                                        
                                        
                                    </div>
                                </Form.Group>
                            
                                
                                
                                    
                            
                            </Form>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
      
      
      
      </>
    
    
  );
}
export default Login;