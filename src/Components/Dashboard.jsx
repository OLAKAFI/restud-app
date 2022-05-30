import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import SideBar from "./SideBar";
import NewSlideBar from "./NewSlideBar";
import {getCourseData} from './CourseData';

import biologyicon from '../images/biology.png';








function Dashboard() {
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
        if (!user) return navigate("/dashboard");
        fetchUserName();
    }, [user, loading]);



  return (
    <>
        
        
        
        <Row >
            <Col className=" col-2 ">
                <NewSlideBar/>

            </Col>
            <Col className=" col-9 ">
                <div className="py-5">
                    <div className="  col-9 vh-100 mx-auto opacity-75 border-light shadow-lg  mt-5  text-center">
                        <div className="container ">
                            <div>
                                <img src={biologyicon} alt="" style={{ width: '15rem', height: '15rem' } }  className="img-fluid"/>
                            </div>

                            <div className="my-2  py-auto px-auto">
                                <h1>Welcome to <span className="kodegreen"> ReStud </span></h1>
                                {/* <h3 >Welcome <span className="kodegreen">{user?.displayName}</span></h3> */}
                                <h3 > <span>{user.displayName ? (<h2 className="text-white"><span>{user?.displayName}</span> </h2>) : <h2> </h2>}</span></h3>
                                        
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
            </Col>
        </Row>
 
    </>
  )
}

export default Dashboard