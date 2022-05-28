import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {getCourseData} from './CourseData';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Logout from './Logout';


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
        
        
        <div className=''>
            <Container className="border border-1 my-5 rounded shadow-lg  text-center" >
                <Row className="">
                    <Col>
                        {/* <div className='img-fluid text-center text-white'>
                            <h1>{courseId.name} Overview</h1>
                            <div className='col-7 mx-auto'>
                              <h5>Course Introduction</h5>
                              <p>{intro}</p>
                            </div>
                            <div>
                              <h5>Other Similar Branches</h5>
                              <div className=' border border-1 '>
                                <p className='d-flex'>{branches}</p>

                              </div>
                              
                            </div>
                        </div> */}

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

                    
            </Container>
        </div>
        <Logout/>
    
    </>
  )
}




export default CourseIndiv