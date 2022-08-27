import "./searchResult.css";

const SearchResult = () => {
  return (
    <div className="searchResult">
      
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/365813000.jpg?k=9cf35d729740edb5f2ff4b3f49e1efea8f6f8406d86815522c126f519820d6ec&o=&hp=1"
          alt=""
          className="searchResultImg"
        />
        <div className="searchResultDescription">
          <h1 className="searchResultTitle">Basil Street Apartment</h1>
          <span className="searchResultDistance">500m from town center</span>
          <span className="searchResultTaxi">Free airport taxi</span>
          <span className="searchResultSubtitle">
            Studio Apartment with Air Conditioning
          </span>
          <span className="searchResultFeatures">
            Entire studio 1 bathroom 21 m2 1 full bed
          </span>
          <span className="searchResultCancelOption">Free cancelation</span>
          <span className="searchResultCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>

        {/* Details section */}
        <div className="searchResultDetails">
          <div className="searchResultDetailRating">
            <span>Exellent</span>
            <button>8.8</button>
          </div>

          <div className="searchResultDetailTexts">
            <span className="searchResultDetailPrice">$123.45</span>
            <span className="searchResultDetailTax">Includes taxes and fees</span>
            <button className="searchResultDetailCheckButton">
              See Availability
            </button>
            </div>
        </div>
     
    </div>
  );
};

export default SearchResult;
