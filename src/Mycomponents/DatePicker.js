// import 

import { useState } from 'react';
import "react-datetime/css/react-datetime.css";
import DatePicker from "react-datetime";

//  Create function for Date-time Picker

function ReactDatetimePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log('selectedDate:', selectedDate.toISOString());

    return (
        <>
        <div className="container">
            <div>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                />
            </div>
            </div>
        </>
    );
}

export default ReactDatetimePicker;
