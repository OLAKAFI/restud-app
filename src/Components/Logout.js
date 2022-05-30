import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiLogOut } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";

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
     
      
        
        
        

          
          
          

          <div className="mt-5 ">
            
            <Button variant="" size="md" onClick={() => navigate(-1)}>
              <div className="d-flex justify-content-evenly">
                <div className="ms-4">
                  <span className="text-white"><RiArrowGoBackFill/></span>
                </div>
                <div className="ms-4 ps-1">
                  <span className="text-white">Go Back</span>

                </div>
              </div>
               
            </Button>
          </div>
          <div className=" ms-auto">
            
            <Button variant="" size="md" onClick={logout}>
              <div className="d-flex justify-content-evenly">
                <div className="ms-4">
                  <span className="text-white"><BiLogOut/></span>
                </div>
                <div className="ms-4 ps-1">
                  <span className="text-white">Logout</span>

                </div>
              </div>
               
            </Button>
          </div>
           
        
      
    
    
    </>

      
       
         
         
        
        
    
     
  );
}
export default Logout;