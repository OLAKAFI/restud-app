import React, { useEffect, useState } from 'react';
import CourseDetails from './CourseDetails';
import {Row, Col } from 'react-bootstrap';

import {getCourseData} from './CourseData';



function Courses() {
   const courses = getCourseData();


  return (
    <>


        <div className='container-fluid bg-kodepurple mt-5 mb-4'>


          <Row xs={1} md={2} lg={3} className="g-4">

            {

              courses.map((data) => (

                
                // <Link to={`/dashboard/${data.id}`}> 
                 <div >
                   
                    <Col  className='bg-light' >
                      <CourseDetails name={data.name} id={data.id} image={data.image} intro={data.details.intro} branches={data.details.branches}/>
                    
                    </Col>

                 </div>
                  
                // </Link>

              ))

            }


          </Row>
        </div>  
    
    
    
    
    </>
    
  )
}

export default Courses