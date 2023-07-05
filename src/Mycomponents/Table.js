import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

 function Reacttable() {
  return (
    <>
     <Table responsive>
      <thead>
        <tr>
          <th>Time Slot</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Morning</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td> <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline                 
                  type={type}
                  id={`inline-${type}-1`}
                />                          
                
              </div>
            ))}
          </Form></td>
          ))}
        </tr>
        <tr>
          <td>Afternoon</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td> <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className=" mb-3">
                <Form.Check
                  inline                 
                  type={type}
                  id={`inline-${type}-1`}
                />                          
                
              </div>
            ))}
          </Form> </td>
          ))}
        </tr>
        <tr>
          <td>Evening</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td > <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className=" mb-3">
                <Form.Check
                  inline                 
                  type={type}
                  id={`inline-${type}-1`}
                />                          
                
              </div>
            ))}
          </Form></td>
          ))}
        </tr>
        <tr>
          <td>Night</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td >    <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className=" mb-3">
                <Form.Check
                  inline                 
                  type={type}
                  id={`inline-${type}-1`}
                />                          
                
              </div>
            ))}
          </Form>
            </td>
          ))}
        </tr>
      </tbody>
    </Table>

    <Button variant="warning">Submit</Button>{' '}
    </>
    )
}

export default Reacttable;