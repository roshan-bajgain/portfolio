import './FormStyles.css';

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/mbjqpebd" method="POST">
            <label>Your Name</label>
            <input type="text" name="User-name" required></input>
            <label>Email</label>
            <input type="email" name="email-address" required></input>
            <label>Subject</label>
            <input type="text" name="User-subject"></input>
            <label>Message</label>
            <textarea rows="6" name="user-message" placeholder='Type your message here' required></textarea>
            <button type='submit' className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form