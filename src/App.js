import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MyNavBar from './Components/MyNavBar';
import Home from './Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import CourseIndiv from './Components/CourseIndiv';
import Footer from './Components/Footer';
import ProfilePage from './Components/ProfilePage';




// import LoginPage from './LoginPage';













function App({id}) {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        // console.log(res.data);
        let data = res.data;
        setUser(data);
    })
    .catch((error) => {
        console.log(error);
    })
  }, []);

  return (
    <>
      <div className='' >
      
      <MyNavBar/>
      

      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        {/* <Route path='/loginpage' element={<LoginPage/>}/> */}
        <Route path='/dashboard/*' element={<Dashboard/>}/>
        <Route path='/dashboard/:mykey' element={<CourseIndiv />}/>
        
        
      </Routes>

      
      
    </div>
    <Footer/>
    
    
    
    </>
    
    
    
  )
};

export default App;
