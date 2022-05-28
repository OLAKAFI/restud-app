import React from 'react';
import {Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {getCourseData} from './CourseData';







function CourseDetails({id, name, image}) {
  return (
    <>
      
      <div>
          
        <Link to={`/dashboard/${name}`} className='text-decoration-none' key={id}>

          <div  className="mx-auto border border-1 border-success shadow-sm py-auto"  style={{ height: '20rem' }} >
              
              <div className='my-5 '>
                <div className='container-fluid  text-center  ' >
                    <img className='img-fluid'  style={{ width: '9rem', height: '9rem' } } src={image} />

                </div>
                
                <div className='text-center text-black container mt-4'>
                    <h3 >{name}</h3>

                </div>
              </div>
              
          </div>
        </Link>
      </div>
      
    
    </>
  )
}

export default CourseDetails