import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
        
        <div className="featuredItem">
            <img 
             className="featuredImg"
             src="https://bstatic.com/xdata/images/xphoto/1182x887/165922591.jpg?k=2f86b3be84eab59ec4197cb58c2d7c26b7893b3d16b73f39707424614f14f5d4&o=?size=S" alt="" />
            <div className="featuredTitles">
                <h1>Sweden</h1>
                <h2>123 Lorem ipsum dolor</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img 
             className="featuredImg"
             src="https://bstatic.com/xdata/images/xphoto/1182x887/165918150.jpg?k=a9ab76cae4d96f01a9dac6a61cab69ddc28e4817544deb1420f5237be8c8fd7b&o=?size=S" alt="" />
            <div className="featuredTitles">
                <h1>Spain</h1>
                <h2>345 Lorem ipsum dolor</h2>
            </div>
        </div>
        
        <div className="featuredItem">
            <img 
             className="featuredImg"
            src="https://bstatic.com/xdata/images/xphoto/1182x887/165918124.jpg?k=908413ca67717d094c16f8fe8a6fc6cf79ba2d498a01844fb3c578ba96942700&o=?size=S" 
            alt="" />
            <div className="featuredTitles">
                <h1>Dubai</h1>
                <h2>567 Lorem ipsum dolor</h2>
            </div>
        </div>

    </div>
  )
}

export default Featured