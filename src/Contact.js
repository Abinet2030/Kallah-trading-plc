import React, { useState } from 'react';
 import Footer from './Footer';
import './Contact.css'
// ContactPage Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can add logic to send the data to your server or API here.
  };

  return (
    <div>
    <div className="contact-page">
      {/* Name Section */}
      <section className="name-section">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please fill out the form below.</p>
      </section>

      {/* Paragraph Section */}
      <section className="paragraph-section">
        <p>
          Whether you have a question, feedback, or want to get in touch with our team,
          we're here to help. Fill in your details and we'll get back to you as soon as possible.
        </p>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label  htmlFor="name">Full Name  </label>
            <input
            className='namehandle'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='name'
            />
          </div>

          <div className="form-group">
            <label  className='lable-handle' htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='email'
            />
          </div>

          <div className="form-group">
            <label className='lable-handle' htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='+2519790705'
            />
          </div>

          <div className="form-group">
            <label  className='lable-handle'  htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder='write your text here'
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Additional Options Section */}
      <section className="additional-options">
        <h3>Other Ways to Reach Us</h3>
        <ul>
           <li>
            support@example.com
          </li>
          <li>
             (123) 456-7890
          </li>
          <li>
            123 Street Name, City, Country
          </li>  
        </ul>
      </section>
    </div>
    
    <Footer/>
    </div>
  );
};

export default Contact;
