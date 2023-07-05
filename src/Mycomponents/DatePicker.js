import { useState } from 'react';
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'

function ReactDatetimePicker () {
    const [selectedDate, setSelectedDate] = useState((new Date));
  return (
    <>
    <div>
      <DatePicker selected={selectedDate}  onChange={date => setSelectedDate(date)} />
    </div>
    </>
  )
}

export default ReactDatetimePicker;
