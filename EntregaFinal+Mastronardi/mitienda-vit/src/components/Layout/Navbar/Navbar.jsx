import logo from "../../../assets/Logo.jpg";
import Styles from './navbar.module.css';
import { CartWidget } from "../../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="logo" className={Styles.logo_navbar}/>
      <nav className={Styles.navbar}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Contact">CONTACTENOS</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}
