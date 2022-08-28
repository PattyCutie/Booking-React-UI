import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Hotel() {
  //temporary
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  // slider image review images
  const [slideImgNumber, setSlideImgNumber] = useState(0);
  const [openImgSlider, setOpenImgSlider] = useState(false);

  const handleOpenImgSlider = (i) => {
    setSlideImgNumber(i);
    setOpenImgSlider(true);
  };

  const handleMoveSlider = (direction) => {
     let newSlideNumber;

     if (direction === 'l') {
      newSlideNumber = slideImgNumber === 0 ? 5 : slideImgNumber -1;
     }else {
      newSlideNumber = slideImgNumber === 5 ? 0 : slideImgNumber + 1;
     }
     setSlideImgNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {/*Slider popup */}
        {openImgSlider && (
          <div className="sliderWrapper">
            
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="sliderClose"
              onClick={() => setOpenImgSlider(false)}
            />

            <FontAwesomeIcon 
            icon={faCircleArrowLeft} 
            className="sliderArrow" 
            onClick={() => handleMoveSlider("l")}
            />

            <div className="sliderImages">
              <img
                src={photos[slideImgNumber].src}
                alt=""
                className="sliderImage"
              />
            </div>
            <FontAwesomeIcon 
            icon={faCircleArrowRight} 
            className="sliderArrow" 
            onClick={() => handleMoveSlider("R")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="hotelBookNowButton">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel </h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>1234 This is the road and City</span>
          </div>

          <span className="hotelDistance">
            Excellent Location 500m from Town center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $200 at this property and get a free airport taxi
          </span>

          {/* data hotel's images */}
          <div className="hotelImages">

            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpenImgSlider(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
            
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the Best Place</h1>
              <p className="hotelDescription">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam consequuntur, sit temporibus velit libero officiis
                enim facere, commodi laudantium nisi nobis eaque! Odit quia est
                consequatur expedita molestiae praesentium quisquam tempore
                animi, veritatis vero deleniti accusamus vitae voluptatem porro.
                Obcaecati nobis impedit deleniti corporis sequi ratione fugit ea
                sint esse quasi labore aut consectetur a, eius soluta dolore
                asperiores harum neque nesciunt mollitia quia delectus.
                Repellendus eum laborum beatae itaque quaerat doloremque ea
                perspiciatis sapiente nobis obcaecati, quia, aperiam
                consequuntur quas, porro explicabo nam architecto ab ipsam
                aspernatur neque? Culpa quisquam consequatur quia voluptatem.
                Quaerat sequi quia alias nemo, quod similique sapiente tenetur
                quisquam, blanditiis sint odio. Hic nisi recusandae officiis at.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                exercitationem ipsa nisi laboriosam odio ipsam repellendus et,
                necessitatibus nam a?
              </span>
              <h2>
                <b>$999</b> (9 night)
              </h2>
              <button>Reserve or Book Now !!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
