import React from "react";
import "./searchInput.css";

function SearchInput({ handleCalendar }) {
  return (
    <div className="searchContainer">
      <div className="search-component">
        <div className="location">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="check-in" onClick={handleCalendar}>
          <label htmlFor="check-in">Check in</label>
          <input onClick={handleCalendar} type="button" value="Add dates" />
        </div>
        <div className="check-out">
          <label htmlFor="check-out">Check out</label>
          <input type="button" value="Add dates" />
        </div>
        <div className="guest">
          <label htmlFor="guest">Infants</label>
          <input type="text" placeholder="Add infants" />
        </div>
        <div className="search-btn">
          <input className="search-button" type="button" value="Search" />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
