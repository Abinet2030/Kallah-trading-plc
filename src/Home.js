import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer';
import './Home.css'

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-up');
    if (!elements.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="hiro">
        <div className="hiro-content">
          <h1 className="animate-up delay-1">Kallah Trading PLC</h1>
          <p className="animate-up delay-2">Your trusted partner in innovative trading solutions and services across Ethiopia and East Africa.</p>
          <button className="btn-learn animate-up delay-3">
            <NavLink to="/about" className="learn-link">
              Learn more..
            </NavLink>
          </button>
        </div>
        <div className="hiro-image">
          <img src={'./asset/hiro.jpg'} alt="Kallah Trading" />
        </div>
      </div>
      {/* offer section */}

      <div className="service-section">
        <h2>We Offer Service</h2>
        <div className="service-container">
          <div className="service-box reveal-up">
            <div className="iconss">
              <img className="ig-iconss" src={'./asset/manifacture.png'} alt="manifucturing" />
            </div>
        
            <h3>Manufacturing</h3>
            <p>Description of Manufacturing services...</p>
            <button className="btn-learn">
              <NavLink to="/service" className="learn-link">Learn more..</NavLink>
            </button>
            
          </div>
          <div className="service-box reveal-up">
             <div className="iconss">
              <img className="ig-iconss" src={'./asset/service.png'} alt="manifucturing" />
        </div>
            <h3>Service Delivery</h3>
            <p>Description of Service Delivery services...</p>
            <button className="btn-learn">
              <NavLink to="/service" className="learn-link">Learn more..</NavLink>
            </button>
          </div>
          <div className="service-box reveal-up">
             <div className="iconss">
                <img className="ig-iconss" src={'./asset/tech.png'} alt="manifucturing" />
        </div>
            <h3>Technology Solutions</h3>
            <p>Description of Technology services...</p>
            <button className="btn-learn">
        <NavLink to="/service" className="learn-link">
          Learn more..
        </NavLink>
        </button>
          </div>
          <div className="service-box reveal-up">
             <div className="iconss">
          <img className="ig-iconss" src={'./asset/tel.png'} alt="manifucturing" />
        </div>
            <h3>Ethio-Telecom</h3>
            <p>Description of Ethio-Telecom services...</p>
            <button className="btn-learn">
        <NavLink to="/service" className="learn-link">
          Learn more..
        </NavLink>
        </button>
          </div>
        </div>
      </div>
        {/* why choose us */}
           <div className="choose-us-section">
        <h2>Why Choose Us</h2>
        <div className="strengths">
          <div className="strength-box reveal-up">
            <h3>Strong Expertise</h3>
            <p>We have a team of experts who specialize in different domains.</p>
          </div>
          <div className="strength-box reveal-up">
            <h3>Reliability</h3>
            <p>We offer reliable solutions that ensure long-term success.</p>
          </div>
          <div className="strength-box reveal-up">
            <h3>Innovative Solutions</h3>
            <p>We use cutting-edge technology to deliver innovative results.</p>
          </div>
          <div className="strength-box reveal-up">
            <h3>Customer Satisfaction</h3>
            <p>Our main goal is to meet and exceed customer expectations.</p>
          </div>
        </div>
      </div>
        {/* Testimonial */}
          <div className="testimonial-section">
        <h2>What People Say About Us</h2>
        <div className="testimonial-container">
          <div className="testimonial-box reveal-up">
            <div className="profile">
              <img src={"./asset/test1 (3).png"} alt="Person 1" className="profile-img" />
              <div className="name-rating">
                <h3>John Doe</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span> 
                </div>
              </div>
            </div>
            <p className="testimonial-description">
              "This company has been amazing! The service they provide is top-notch, and their attention to detail is unmatched. Highly recommend!"
            </p>
          </div>

          <div className="testimonial-box reveal-up">
            <div className="profile">
              <img src="./asset/test1 (3).png" alt="Person 2" className="profile-img" />
              <div className="name-rating">
                <h3>Jane Smith</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
            <p className="testimonial-description">
              "A fantastic experience from start to finish. The team was responsive and provided solutions that exceeded our expectations."
            </p>
          </div>

          <div className="testimonial-box reveal-up">
            <div className="profile">
              <img src="./asset/test1 (3).png" alt="Person 3" className="profile-img" />
              <div className="name-rating">
                <h3>Sarah Lee</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
            <p className="testimonial-description">
              "Working with this company has been an absolute pleasure. Their customer service is exceptional, and the quality of work is superb."
            </p>
          </div>
        </div>
      </div>
      {/* Meet Our Team (also shown on Home) */}
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

      <Footer/>
    </div>
  );
}

export default Home;
