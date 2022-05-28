import React, { useEffect, useState } from "react";
import Courses from './Courses';
// import Dashsidebar from './Dashsidebar';
import Logout from './Logout';
import 'bootstrap/dist/css/bootstrap.min.css';

import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


function Dashboard({id}) {
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
    if (!user) return navigate("/dashboard");
    fetchUserName();
  }, [user, loading]);
  return (
    <>
      <div className='bg-light'>
        {/* <Dashsidebar/> */}
        
     
        <div className='ms-3 pt-4'>
          {/* <h1 >{user?.displayName}</h1> */}
          {user.displayName ? (<h2 className="kodegreen"><span>{user?.displayName}</span> </h2>) : <h2> </h2>}
          <h1>Welcome to <span className='kodepurple'>ReStud </span> </h1>
        </div>
        <Courses/>
        

        <Logout/>

      </div>
      
        

        
    
    
    
    </>
  )
}

export default Dashboard