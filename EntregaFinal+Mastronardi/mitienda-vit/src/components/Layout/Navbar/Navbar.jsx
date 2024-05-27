import logo from "../../../assets/Logo.jpg";
import Styles from './navbar.module.css';
import { CartWidget } from "../../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="logo" className={Styles.logo_navbar}/>
      <nav className={Styles.navbar}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/productos">PRODUCTOS</Link></li>
          <li><Link to="/category/Sahumerios">SAHUMERIOS</Link></li>
          <li><Link to="/category/CascadasHumo">CASCADAS DE HUMO</Link></li>
          <li><Link to="/category/PiedrasEnergeticas">PIEDRAS ENERGETICAS</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/dashboard">Dash</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}
