import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import NewSlideBar from "./NewSlideBar";
import {getCourseData} from './CourseData';

import biologyicon from '../images/biology.png';








function Profile() {
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
        if (!user) return navigate("/profile");
        fetchUserName();
    }, [user, loading]);



  return (
    <>
        
        
        
        <Row className="vh-100 bg-kodepurple ">
            <Col className=" col-2 ">
                <NewSlideBar/>

            </Col>
            <Col className=" bg-kodepurple  ">
                {/* <div className=" "> */}
                    <div className="  col-10 py-5 mx-auto my-5  border border-1  border-light shadow-lg rounded   text-center">
                        <div className=" container ">
                            

                          
                            
                                <div className="">
                                    <div className="">
                                        <h2 className="mb-3" >Profile Details</h2>
                                        <h3 > <span>{user.displayName ? (<h2 className="text-white"><span>{user?.displayName}</span> </h2>) : <h2> </h2>}</span></h3>
                                        <p> <span className=" ">{user?.email}</span></p>
                                    </div>
                                    <div className=" " >
                                        <img  src={user?.photoURL} className="border rounded-circle img-fluid"/>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-muted">This accont was created {user?.metadata.creationTime}</p>
                                        <p className="text-muted">Last seen {user?.metadata.lastSignInTime}</p>
                                    </div>
                                    

                                </div>
                           
                        </div>
                        

                        
                        
                        
                            
                            
                        
                        {/* <div className='d-flex justify-content-end mt-4'>

                            <div className="ms-auto">
                                <Button variant="danger" size="md" onClick={logout}>
                                    Logout
                                </Button>

                            </div>
                                
                        </div> */}
                        
                        
                    </div>
                    
                    
                {/* </div> */}
            </Col>
        </Row>
        
        

        
    
    
    </>
  )
}

export default Profile