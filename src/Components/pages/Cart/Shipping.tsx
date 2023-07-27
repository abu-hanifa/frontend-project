import React from 'react'

const Shipping = () => {
  return (
    <div>
       <div className="input-container">
      <label htmlFor="firstName" className="input-label">
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        className="input-field"
        placeholder="Enter your first name"
      />

      <label htmlFor="lastName" className="input-label">
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        className="input-field"
        placeholder="Enter your last name"
      />

      <button type="submit" className="input-btn">
        Submit
      </button>
    </div>
    </div>
  )
}

export default Shipping
