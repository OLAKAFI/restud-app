import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


function Logout() {
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
     
      <Container fluid className="pb-5">
        <Col className=''>
          <div>
            <hr className=" border border-2 border-success "></hr>
          </div>
 
          <div>
            <h5>Login Details</h5>
            <p>{user?.email}</p>
            <p>{user?.displayName}</p>
            <p>This accont was created {user?.metadata.creationTime}</p>
            <p>Lat seen {user?.metadata.lastSignInTime}</p>
          </div>             

          
          

        </Col>
        
        <Col className='d-flex justify-content-start mt-4'>

          
          <div className=' '>
            <Button variant="success" size="md" onClick={() => navigate(-1)}>
              Go Back
            </Button>
  
          </div>
          <div className="ms-auto">
                <Button variant="danger" size="md" onClick={logout}>
                  Logout
                </Button>

          </div>
           
        </Col>
      </Container>
    
    
    </>

      
       
         
         
        
        
    
     
  );
}
export default Logout;