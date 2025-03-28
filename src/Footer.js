import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Footer Left - Navigation Links */}
        <div className="footer-left">
          <h3>Pages</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Service</a></li>
            
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Footer Center - Contact Information */}
        <div className="footer-center">
          <h3>Contact Us</h3>
          <p><strong>Phone:</strong> +2519115164..</p>
          <p><strong>Phone:</strong> +2519115152..</p>
          <p><strong>Email:</strong> <a href="mailto:info@aewostech.com">info@abisostech.com</a></p>
          
        </div>

        {/* Footer Right - Newsletter Subscription */}
        <div className="footer-right">
          <h3>Newsletter</h3>
          <p>Enter your email to receive updates:</p>
          <form action="#" method="POST">
            <input className='gmelinput' type="email" placeholder="Enter your mail..." required />
            <button className='btn-sum1' type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 <strong>Abintech</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
