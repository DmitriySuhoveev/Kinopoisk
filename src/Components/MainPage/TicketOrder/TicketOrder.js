import React, {useState} from 'react';
import Calendar from 'react-calendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
const TicketOrder = () =>{
    const [caledar, setCalendar] = useState(new Date())
    const [range, setRange] = useState(new Date())
    return(
        <div>
            <Calendar
        onChange={setCalendar}
        value={caledar}
      />
        <DateRangePicker
        onChange={setRange}
        value={range}
      />
        </div>
    )
}

export default TicketOrder;