import React from 'react';
import {Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {getCourseData} from './CourseData';







function CourseDetails({id, name, image}) {
  return (
    <>
      
      <div className='shadow-lg border border-rounded'>
          
        <Link to={`/mycourse/${name}`} className='text-decoration-none' key={id}>

          <div  className="mx-auto   py-auto"  style={{ height: '20rem',  width: '15rem', }} >
              
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