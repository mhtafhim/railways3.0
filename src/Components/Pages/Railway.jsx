import React from 'react'
import './Railway.css'
import Train from '../Assets/Train.jpg';
import Search from '../Assets/search.jpg';
import Select from '../Assets/select.jpg';
import Pay from '../Assets/pay.jpg';
import Logo1 from '../Assets/Bkash.png';
import Logo2 from '../Assets/Nagad.png';
import Logo3 from '../Assets/Rocket.png';
import Logo4 from '../Assets/Visa.png';
import Logo5 from '../Assets/MasterCard.png';
export const Railway = () => {
  return (
    <div className="page-container">
      {/* Big Picture Section */}
      <section className="big-picture-section">
        <img src={Train} alt="Train" className="big-picture" />
        <div className="description">
          <h2>Railway E-Service</h2>
          <p>Railway e-Service is an innovative platform that leverages digital technology to enhance and streamline various services within the railway industry. This platform aims to provide users with convenient and efficient solutions, ranging from online ticket booking and seat selection to payment processing and real-time information updates. By embracing digital advancements, Railway E-Service contributes to a smoother and more user-friendly travel experience, fostering accessibility, speed, and reliability for passengers using the railway network.</p>
        </div>
      </section>

      {/* Image Section with Descriptions */}
      <section className="image-section">
        <div className="image-item">
          <img src={Search} alt="Search" />
          <h2>Search</h2>
          <p>Choose your origin, destination, journey dates and search for trains</p>
        </div>
        <div className="image-item">
          <img src={Select} alt="Select" />
          <h2>Select</h2>
          <p>Select your desired trip and choose your seats</p>
        </div>
        <div className="image-item">
          <img src={Pay} alt="Pay" />
          <h2>Pay</h2>
          <p>Pay for the tickets via Debit / Credit Cards or MFS</p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>For inquiries and support, please reach out to us:</p>
        <div className="contact-details">
          <p>Email: info@railwayeservice.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          {/* Add more contact information as needed */}
        </div>
      </section>

      {/* Payment System Section */}
      <section className="payment-system">
        <h2>Payment System</h2>
        <div className="brand-logos">
          <img src={Logo1} alt="Bkash" />
          <img src={Logo2} alt="Nagad" />
          <img src={Logo3} alt="Rocket" />
          <img src={Logo4} alt="Visa" />
          <img src={Logo5} alt="MasterCard" />
        </div>
      </section>

      <section className="feedback-section">
  <h2>Feedback</h2>
  <p>We value your feedback. Please share your thoughts and suggestions with us.</p>
  <form className="feedback-form">
    <textarea className="feedback-input" rows="4" placeholder="Type your feedback here..."></textarea>
    <button className="feedback-button" type="submit">Submit Feedback</button>
  </form>
</section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Railway E-Service. All rights reserved.</p>
      </footer>
    </div>
  )
}
