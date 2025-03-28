import React from 'react'
import Navbar from './Navbar'
import Footer from'./Footer'
import './Service.css'
function Service() {
  return (
    <div>
        <Navbar/>

         <div className="service-sectionn">
  <h2>We Offer Service</h2>
  <div className="service-containerr">
    <div className="service-boxx">
      <div className="iconss">
        <img className="ig-iconss" src={'./asset/manifacture.png'} alt="Manufacturing Icon" />
      </div>
      
      <h3>Manufacturing</h3>
      <p>Description of Manufacturing services jdhsfh fhs'oiui kjpofs kjopi0pisf kjpoosf kmjpofs...</p>
      <div className="service-image">
        <img className="service-img" src={'./asset/mani.png'} alt="Manufacturing" />
      </div>
    </div>

    <div className="service-boxx">
      <div className="iconss">
        <img className="ig-iconss" src={'./asset/service.png'} alt="Service Delivery Icon" />
      </div>
      
      <h3>Service Delivery</h3>
      <p>Description of Service Delivery services...</p>
      <div className="service-image">
        <img className="service-img" src={'./asset/mani.png'} alt="Service Delivery" />
      </div>
    </div>

    <div className="service-boxx">
      <div className="iconss">
        <img className="ig-iconss" src={'./asset/tech.png'} alt="Technology Solutions Icon" />
      </div>
      
      <h3>Technology Solutions</h3>
      <p>Description of Technology services...</p>
      <div className="service-image">
        <img className="service-img" src={'./asset/mani.png'} alt="Technology Solutions" />
      </div>
    </div>

    <div className="service-boxx">
      <div className="iconss">
        <img className="ig-iconss" src={'./asset/tel.png'} alt="Ethio-Telecom Icon" />
      </div>
      
      <h3>Ethio-Telecom</h3>
      <p>Description of Ethio-Telecom services...</p>
      <div className="service-image">
        <img className="service-img" src={'./asset/mani.png'} alt="Ethio-Telecom" />
      </div>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  )
}

export default Service
