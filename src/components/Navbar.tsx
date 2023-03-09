import { Link } from 'react-router-dom';
import Logo from '../assets/images/Group 18.png';

const Navbar = () => {
  return (
    <nav className="header-main">
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>

      <div className="desktop-menu">
        <Link to="#" className="contact-us">
          <p className="">Contact Us</p>{' '}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
