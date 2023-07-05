// import 

import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

// Create function for table
function Reacttable() {
    return (
        <>
            <div className="container">
            <Table responsive bordered >

          {/* Table Head */}
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

                {/* Table Body  */}
                <tbody>
                    <tr>
                        <td>Morning</td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td>
                                {' '}
                                <Form>
                                    {['radio'].map((type) => (
                                        <div
                                            key={`inline-${type}`}
                                            className='mb-3'>
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
                    <tr>
                        <td>Afternoon</td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td>
                                {' '}
                                <Form>
                                    {['radio'].map((type) => (
                                        <div
                                            key={`inline-${type}`}
                                            className=' mb-3'>
                                            <Form.Check
                                                inline
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                        </div>
                                    ))}
                                </Form>{' '}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Evening</td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td>
                                {' '}
                                <Form>
                                    {['radio'].map((type) => (
                                        <div
                                            key={`inline-${type}`}
                                            className=' mb-3'>
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
                    <tr>
                        <td>Night</td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td>
                                {' '}
                                <Form>
                                    {['radio'].map((type) => (
                                        <div
                                            key={`inline-${type}`}
                                            className=' mb-3'>
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
            
            </div>
        </>
    );
}

export default Reacttable;
