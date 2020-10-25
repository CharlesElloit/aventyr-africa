import React, { useState } from "react";
import "./search.css";
import HotelIcon from "@material-ui/icons/Hotel";
import FlightIcon from "@material-ui/icons/Flight";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Sort from "@material-ui/icons/Sort";
import SearchInput from "./SearchInput";
import DatePicker from "../datePicker/DatePicker";

function Search() {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  return (
    <div className="search">
      <p>Plan your safari</p>
      <SearchInput handleCalendar={handleCalendar} />

      {showCalendar && <DatePicker />}

      <div className="links">
        <ul>
          <li>
            <FlightIcon />
            Flights
          </li>
          <li>
            <HotelIcon /> Hotels
          </li>
          <li>
            <Sort />
            Things to do
          </li>
          <li>
            <RestaurantIcon /> Restaurants
          </li>
          <li>Vocation Rentals</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
