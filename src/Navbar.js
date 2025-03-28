
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
            
  
    
  return (
    <div>
      <div className='navigation'>
        <div className='left'>
          <img className='logo-img' src={'./asset/Kallah image.jpg'} alt="Kallah Trading" />
          <span className='kallah'>Kallah </span>
              <span className='trading'>Trading PLC</span>
            
        </div>
        <div className='right'>
          <ul>
              <li   >
              <Link to="/"  >Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
