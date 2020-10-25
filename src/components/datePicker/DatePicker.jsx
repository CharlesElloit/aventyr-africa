import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import "./datePicker.css";

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionDateRange = {
    startDate,
    endDate,
    key: "selectionDate"
  };

  const handleSelectedDate = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="datepicker">
      <DateRangePicker
        ranges={[selectionDateRange]}
        onChange={handleSelectedDate}
      />
    </div>
  );
}

export default DatePicker;
