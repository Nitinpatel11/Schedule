import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { useState } from 'react';





export default function Schedule() {
  
  
  return (
    <div className='text-center my-3'>
        <Button  variant="light">Back</Button>{' '}     
        <h2>Schedule your housekeeping service</h2>      
        <ProgressBar now={20} size="xs" />  
        <h5>Set your Schedule</h5>

        <Nav bg="warning" variant="tabs" defaultActiveKey="Recurring">
      <Nav.Item>
        <Nav.Link eventKey="Recurring">Recurring</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="One Time">One Time</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Flexible">Flexible</Nav.Link>
      </Nav.Item>
      </Nav>

        <Row className="g-2">
        <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          
        >
          <Form.Select aria-label="Floating label select example">
            <option>Hour</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hour</option>
            <option value="3">3 Hour</option>
            <option value="4">4 Hour</option>
            <option value="5">5 Hour</option>
            <option value="6">6 Hour</option>
            <option value="7">7 Hour</option>
            <option value="8">8 Hour</option>
          </Form.Select>
        </FloatingLabel>
      </Col>

      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          
        >
          <Form.Select aria-label="Floating label select example">
            <option value="1">Daily</option>
            <option value="2">Weekly</option>
            <option value="3">Monthly</option>           
          </Form.Select>
        </FloatingLabel>
      </Col>
      </Row>

      <Form.Label>Start Date</Form.Label>

     
    </div>
  )
}
