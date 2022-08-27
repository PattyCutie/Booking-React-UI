import React from 'react'
import './mailList.css'


const MailList = () => {
  return (
    <div className='mailList'>
        <h1 className="mailTitle">Save time, Save money</h1>
        <span className="mailDescription">Sign up and we'll send the best deal to you</span>
        <div className="mailListInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList