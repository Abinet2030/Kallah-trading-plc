import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer';
import './About.css'
function About() {
  return (
    <div>
      <Navbar/>
         <div className='about-page'>
          
           <section className="intro">
 
  <div className="content-wrapper">
     
    <p>
      <h2>About Kallah Trading PLC</h2>
      Kallah Trading PLC was founded and established in December 2024, by a group of dedicated Ethiopian citizens. The company was incorporated in accordance with the commercial code of Ethiopia, and is based in Addis Ababa, in the LEMI KURA Sub-city, as a private limited company.
      <br />
      Kallah Trading PLC was created with a clear focus on building a strong presence in the Ethiopian market, and in East Africa as a whole. We are dedicated to offering a wide range of services while supporting the nation's growing economy.
    </p>
    <img src="./asset/hiro2.jpg" alt="Kallah Trading" className="hiro-image" />
  </div>
</section>


        <div className="mission">
          <h2>Our Mission and Vision</h2>
          <p>
           At Kallah Trading PLC, we are driven by a clear mission and a bold vision to contribute to Ethiopia's growth and to become a leader in East Africa.

Our mission is to establish Kallah Trading PLC as an internationally competitive and well-organized company. We aim to deliver excellence across key sectors such as manufacturing, service delivery, technology, and telecommunications. By focusing on innovation and efficiency, we seek to provide high-quality products and services that meet both local and global standards.

Our vision is to become the most competitive and leading business in Ethiopia and East Africa. We are committed to building substantial sectors that foster economic growth and create long-term value for our nation. Through professionalism and dedication, we aim to position Kallah Trading PLC as an industry leader, delivering impactful solutions to the people of Ethiopia and beyond.
          </p>
        </div>
        

      <section className="team">
        <h3>Meet Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <img src="./asset/test1 (3).png" alt="Team Member 1" />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="./asset/test1 (3).png" alt="Team Member 2" />
            <h4>Jane Smith</h4>
            <p>Chief Marketing Officer</p>
          </div>
          <div className="team-member">
            <img src="./asset/test1 (3).png" alt="Team Member 3" />
            <h4>Mark Johnson</h4>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      <section className="story">
        <h3>Our Story</h3>
        <p>
          Founded in 2010, we started as a small startup with a big vision. Our
          founders saw the potential to create something that could make a real
          impact. Over the years, we’ve expanded our team, refined our services,
          and built lasting relationships with our clients.
        </p>
      </section>

    <section className="core-values">
  <h3>Our Core Values</h3>
  <div className="core-value">
    <div className="icon">
      <i className="fas fa-lightbulb"></i> {/* Example icon for Innovation */}
    </div>
    <div className="value">
      <h4>Innovation</h4>
      <p>We continuously strive to innovate and improve in all aspects of our business.</p>
    </div>
  </div>
 {/* core value */}
  <div className="core-value">
    <div className="icon">
      <i className="fas fa-handshake"></i> {/* Example icon for Integrity */}
    </div>
    <div className="value">
      <h4>Integrity</h4>
      <p>We maintain honesty, transparency, and ethical behavior in all our dealings.</p>
    </div>
  </div>

  <div className="core-value">
    <div className="icon">
      <i className="fas fa-users"></i> {/* Example icon for Collaboration */}
    </div>
    <div className="value">
      <h4>Collaboration</h4>
      <p>We believe in teamwork and collaboration to achieve common goals and drive success.</p>
    </div>
  </div>
</section>


      <section className="cta">
        <h3>Ready to Work With Us?</h3>
        <button className="cta-button">
          <NavLink to="/contact" className="learn-link">
                  Contact Us
                  </NavLink>
          
          </button>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default About