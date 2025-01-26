import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission here (e.g., sending data to a server)
    console.log(formData);
  };

  return (
    <>
    <Navbar />
    <section className="contact-section">
      <div className="container3">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            If you have any questions, feel free to reach out to us. We are here to help!
          </p>
          <div className="contact-details">
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Email:</strong> contact@qarzehasana.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>
        </div>

        <div className="contact-form">
          <h3 className="form-title">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
