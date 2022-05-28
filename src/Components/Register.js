import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";



import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import techsupport from '../images/tech-support.png';
import "../App.css";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/profile')
  }, [user, loading, navigate]);
  return (
      <>

        <div className=''>
                    <Container className="border border-1 my-5 rounded shadow-lg login-bg" >
                        <Row className="">
                            <Col>
                                <div className='img-fluid text-center text-white'>
                                    <h1>Student Login</h1>
                                    <p>Make sure your account is secured</p>

                                    <img src={techsupport} alt="" srcset="" className='img-fluid' />
                                </div>
                                
                            </Col>
                            <Col className='my-auto'>
                                <div className=''>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text"
                                                className="register__textBox"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Full Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email"
                                                className="login__textBox"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="E-mail Address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control  type="password"
                                                className="login__textBox"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Password" />
                                                
                                        </Form.Group>

                                        
                                        <Form.Group className="mt-5">
                                            
                                            <div className="d-grid gap-2">
                                                <Button variant="success" size="lg" onClick={register}>
                                                    Sign Up
                                                </Button>
                                                <Button variant="secondary" size="lg" onClick={signInWithGoogle}>
                                                    Sign Up with Google
                                                </Button>
                                                
                                                
                                            </div>
                                            <div className="mt-3">
                                                Already have an account? <Link to="/login">Login</Link> now.
                                            </div>
                                        </Form.Group>
                                    
                                        
                                        
                                            
                                    
                                    </Form>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>

            {/* <div className="register">
                <div className="register__container">
                    <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    />
                    <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    />
                    <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <button className="register__btn" onClick={register}>
                    Register
                    </button>
                    <button
                    className="register__btn register__google"
                    onClick={signInWithGoogle}
                    >
                    Register with Google
                    </button>
                    <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                    </div>
                </div>
            </div> */}
            
      
      </>
    
  );
}
export default Register;