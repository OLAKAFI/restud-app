import React, { useEffect, useState } from "react";
import Courses from './Courses';
// import Dashsidebar from './Dashsidebar';
import Logout from './Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container} from 'react-bootstrap';

import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import NewSlideBar from "./NewSlideBar";




function MyCourses({id}) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      console.log(name);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/mycourse");
    fetchUserName();
  }, [user, loading]);
  return (
    <>
      <div lassName="bg-light" >
        {/* <Dashsidebar/> */}
        {/* <SideBar/> */}
        
        
        <Row className="">

        
          <Col className="col-2 ">
              <NewSlideBar/>

          </Col>
      
          <Col className='pt-4 col-9 mx-auto  bg-kodepurple'>
            
            {/* <h1 >{user?.displayName}</h1> */}
            <Container  >
              <div className="ms-auto text-center">
                {user.displayName ? (<h2 className="text-white"><span>{user?.displayName}</span> </h2>) : <h2> </h2>}
                <h1>Welcome to <span className='text-white'>ReStud </span> </h1>
              </div>
              
            </Container>
            <Courses/>
            

          </Col>
          
        </Row>

        

      </div>
      
        

        
    
    
    
    </>
  )
}

export default MyCourses