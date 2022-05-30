import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {getCourseData} from './CourseData';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Logout from './Logout';
import NewSlideBar from './NewSlideBar';



function CourseIndiv() {

    const navigate = useNavigate();
    let { mykey } = useParams();
    const courses = getCourseData();  
    const [courseId, setCourseId] = useState({});
    const [intro, setIntro] = useState('');
    const [video, setVideo] = useState('');
    const [branches, setBranches] = useState([]);

    useEffect(() => {
      let myarray = courses;
      const courseId = myarray.find((e) => e.name === mykey);
      const intro = courseId.details.intro;
      const video = courseId.video;
      const branches = courseId.details.branches.map((branch) => (<ul key={branch}>{branch}</ul>));

      setCourseId(courseId);
      setVideo(video);
      setIntro(intro);
      setBranches(branches);

    }, [courses, mykey])

  
    
    

  return (
    <>
        
        
       
                <Row className="">



               

        
                    <Col className="col-2 ">
                        <NewSlideBar/>

                    </Col>
                    <Col className='col-8 my-5 ms-5 '>
                        <Card  className="mx-auto border-primary shadow-sm text-center"  >
                          
                          
                          <iframe  height="400" src={courseId.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          
                          <Card.Body className=''>
                              <Card.Title>
                                <h2>{courseId.name} Course Overview</h2>
                              </Card.Title> 
                              <Card.Text className='mt-4' >
                                <h5>Course Introduction</h5>
                                <p className='px-5'>{intro}</p>
                              </Card.Text>
                          </Card.Body>
                          <Card.Footer className='d-inline-block '>
                              <small className="fw-bold d-lg-flex align-left">{branches}</small>
                          </Card.Footer>
                      </Card>


                      
                        
                    </Col>
                    
                    
                    
                </Row>

                    
          
    
    </>
  )
}




export default CourseIndiv