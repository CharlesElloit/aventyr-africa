import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function Calendar() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        className="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
        variant="inline"
        orientation="landscape"
      />
    </MuiPickersUtilsProvider>
  );
}

export default Calendar;
