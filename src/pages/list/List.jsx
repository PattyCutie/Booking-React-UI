import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchResult from "../../components/searchResult/SearchResult";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function List() {
  //useLocation hook (bring state from other component do display on this page)
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openCalendar, setOpenCalendar] = useState(false);

  console.log(location);

  return (
    <div className="list">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>

            <div className="listItem">
              <label htmlFor="">Destination</label>
              <input
                className="listDestinationInput"
                type="text"
                placeholder={destination}
              />
            </div>

            <div className="listItem">
              <label htmlFor="">Check-in Date</label>
              <span
                onClick={() => setOpenCalendar(!openCalendar)}
                className="listCheckinDate"
              >{`${format(date[0].startDate, "MM/dd/yy")} to ${format(
                date[0].endDate,
                "MM/dd/yy"
              )}`}</span>

              {openCalendar && (
                <DateRange
                  minDate={new Date()}
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  className="SearchCalendar"
                />
              )}
            </div>

            <div className="listItem">
              <label htmlFor="">Options</label>
              <div className="listOptionItems">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button className="listSearchButton">Search</button>
          </div>
          
          <div className="listResult">
           <SearchResult />
           <SearchResult />
           <SearchResult />
           <SearchResult />
           <SearchResult />
           <SearchResult />
           <SearchResult />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default List;
