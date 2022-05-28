import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


function ProfilePage() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        } catch (err) {
        console.error(err);
        // alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);



  return (
    <>
        
        

        <Container>
            <Row className="border border-1 py-4 mx-2 my-4 border-success rounded">
                <Container className="mx-2 my-3 mb-4">
                    <div>
                        <div>
                            <h1>Profile Page</h1>
                        </div>
                        <div className="my-2">
                            {/* <h3 >Welcome <span className="kodegreen">{user?.displayName}</span></h3> */}
                            <h3>Welcome <span>{user.displayName ? (<h2 className="kodegreen"><span>{user?.displayName}</span> </h2>) : <h2> </h2>}</span></h3>
                            
                        </div>
                        <div className="my-4">
                            <Button variant="outline-success" size="lg">
                                <Link to="/dashboard" className="text-decoration-none text-dark" >Go to Dashboard</Link>
                            </Button>
                        </div>

                    </div>
                    
                </Container>
                <Col className='my-auto '>
                    <div className='col-10'>
                        <div className="px-2">
                            <div>
                                <h5 className="mb-4" >Profile Details</h5>
                                <p className="kodepurple fw-bold">{user?.displayName}</p>
                                <p> <span className="kodepurple ">{user?.email}</span></p>
                            </div>
                            <div className="mt-5">
                                <p className="text-muted">This accont was created {user?.metadata.creationTime}</p>
                                <p className="text-muted">Last seen {user?.metadata.lastSignInTime}</p>
                            </div>
                            

                        </div>
                    </div>
                </Col>
                <Col className="">
                    <div className=" mt-5" >
                        
                        <img  src={user?.photoURL} className="border rounded-circle img-fluid"/>
                    </div>
                    
                </Col>
                <div className='d-flex justify-content-end mt-4'>

                    <div className="ms-auto">
                        <Button variant="danger" size="md" onClick={logout}>
                            Logout
                        </Button>

                    </div>
                        
                </div>
                
                
            </Row>
            
            
        </Container>

        
    
    
    </>
  )
}

export default ProfilePage