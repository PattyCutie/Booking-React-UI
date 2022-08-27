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
import { useNavigate } from "react-router-dom";

function Header({ type }) {
  const navigate = useNavigate()
  const [destination, setDestination] = useState(""); // destination search
  const [openDate, setOpenDate] = useState(false); //calendar range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  }); //Options persons and room

  const handleCounterOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleDestinationSearch = () => {
    navigate('/hotels', {state: {destination, date, options}})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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

{/* choose some components for list page */}
        { type !== "list" &&
          <>
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
              onChange={e=>setDestination(e.target.value)}
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
                minDate={new Date()}
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="headerCalendarDateRange"
              />
            )}
          </div>
          {/* Calendar End*/}

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult ∙ ${options.children} children ∙ ${options.room} room`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    onClick={() => handleCounterOption("adult", "d")}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    onClick={() => handleCounterOption("adult", "i")}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    onClick={() => handleCounterOption("children", "d")}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    onClick={() => handleCounterOption("children", "i")}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                  disabled={options.room <= 1}
                    onClick={() => handleCounterOption("room", "d")}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.room}
                  </span>
                  <button
                    onClick={() => handleCounterOption("room", "i")}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerSearchButton" onClick={handleDestinationSearch}>Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
}

export default Header;
