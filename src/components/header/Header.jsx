import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faLocationDot,
  faMountainCity,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header() {
  const [destination, setDestination] = useState(""); // find destination

  const [openDate, setOpenDate] = useState(false); //calendar range

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  }); //Options persons and room

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer listMode">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Accommodations</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMountainCity} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Find your next Destination</h1>
        <p className="headerDescription">
          Search flights, hotels, places plus instant discount 10% and much
          more...
        </p>
        <button className="headerButton">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="headerSearchIcon"
            />
            <input
              type="text"
              placeholder="Find your destination"
              className="headerSearchInput"
            />
          </div>

          {/* Calendar Start*/}
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerSearchIcon"
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="calendarDateRange "
              />
            )}
          </div>
          {/* Calendar End*/}

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span className="headerSearchText">{`${options.children} adult ∙ ${options.children} children ∙ ${options.room} room`}</span>
            <div className="options">

              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton">+</button>
                </div>

              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">0</span>
                  <button className="optionCounterButton">+</button>
                </div>

              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="headerSearchButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
