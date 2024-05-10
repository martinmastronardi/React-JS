import logo from "../../../assets/Logo.jpg"
import Styles from './navbar.module.css'
import { CartWidget } from "../../CartWidget/CartWidget.jsx"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <header>
    <img src={logo} alt="logo" className={Styles.logo_navbar}/>
    <nav className={Styles.navbar}>
            <ul>
        <Link to="/">HOME </Link>
        <Link to="/Contact">CONTACTENOS</Link>
        <Link to="/about">ABOUT US</Link>
       
      </ul>
      <CartWidget/> 
    </nav>

    </header>
  )
}
