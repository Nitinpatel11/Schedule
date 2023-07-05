//  import 

import React, { useState } from 'react';
import Table from './Table';
import DatePicker from './DatePicker';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Tab, Tabs } from 'react-bootstrap';


// Create function for Schedule 

export default function Schedule() {
    const handleTimeChange = (value) => {
        console.log('value:', value);
    };

    const [key, setKey] = useState('recurring');

    return (
        <div className='container'>
             <Button variant='light' onClick={() => setKey('recurring')}>
                Back
            </Button>{' '}
        <div className='text-center my-3'>
           
            <h2><u>Schedule your housekeeping service</u></h2>
            
            <h5>Set your Schedule</h5>
            <Tabs
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className='mb-3'>
                <Tab eventKey='recurring' title='Recurring'>
                    <Row className='g-2'>
                        <Col md>
                            <FloatingLabel controlId='floatingSelectGrid'>
                                <Form.Select
                                    aria-label='Floating label select example'
                                    onChange={(event) =>
                                        handleTimeChange(event.target.value)
                                    }>
                                    <option>Hour</option>
                                    <option value='1'>1 Hour</option>
                                    <option value='2'>2 Hour</option>
                                    <option value='3'>3 Hour</option>
                                    <option value='4'>4 Hour</option>
                                    <option value='5'>5 Hour</option>
                                    <option value='6'>6 Hour</option>
                                    <option value='7'>7 Hour</option>
                                    <option value='8'>8 Hour</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                        <Col md>
                            <FloatingLabel controlId='floatingSelectGrid'>
                                <Form.Select
                                    aria-label='Floating label select example'
                                    onChange={(event) =>
                                        handleTimeChange(event.target.value)
                                    }>
                                    <option value='daily'>Daily</option>
                                    <option value='weekly'>Weekly</option>
                                    <option value='monthly'>Monthly</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Form.Label>Enter Date</Form.Label>
                    <DatePicker/>
                   <Table/>
                   <Button variant='warning'>Submit</Button>{' '}
                </Tab>
                <Tab eventKey='oneTime' title='One Time'>
                <Row className='g-2'>
                        <Col md>
                            <FloatingLabel controlId='floatingSelectGrid'>
                                <Form.Select
                                    aria-label='Floating label select example'
                                    onChange={(event) =>
                                        handleTimeChange(event.target.value)
                                    }>
                                    <option>Hour</option>
                                    <option value='1'>1 Hour</option>
                                    <option value='2'>2 Hour</option>
                                    <option value='3'>3 Hour</option>
                                    <option value='4'>4 Hour</option>
                                    <option value='5'>5 Hour</option>
                                    <option value='6'>6 Hour</option>
                                    <option value='7'>7 Hour</option>
                                    <option value='8'>8 Hour</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        </Row>
                        <Form.Label>Enter Date</Form.Label>
                        <DatePicker/>
                        <Button variant='warning'>Submit</Button>{' '}
                </Tab>
                <Tab eventKey='flexible' title='Flexible'>
                <Row className='g-2'>
                        <Col md>
                            <FloatingLabel controlId='floatingSelectGrid'>
                                <Form.Select
                                    aria-label='Floating label select example'
                                    onChange={(event) =>
                                        handleTimeChange(event.target.value)
                                    }>
                                    <option>Hour</option>
                                    <option value='1'>1 Hour</option>
                                    <option value='2'>2 Hour</option>
                                    <option value='3'>3 Hour</option>
                                    <option value='4'>4 Hour</option>
                                    <option value='5'>5 Hour</option>
                                    <option value='6'>6 Hour</option>
                                    <option value='7'>7 Hour</option>
                                    <option value='8'>8 Hour</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        </Row>
                        <Form.Label>Enter Date</Form.Label>
                        <DatePicker/>
                      <Table/>  
                      <Button variant='warning'>Submit</Button>{' '}
                </Tab>
            </Tabs>
            
        </div>
        </div>
    );
}
