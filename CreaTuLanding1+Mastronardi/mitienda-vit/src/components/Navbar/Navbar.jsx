import logo from "../../assets/Logo.jpg"
import Styles from './navbar.module.css'
import { CartWidget } from "../CartWidget/CartWidget.jsx"
export const Navbar = () => {
  return (
    <header>
    <img src={logo} alt="logo" className={Styles.logo_navbar}/>
    <nav className={Styles.navbar}>
            <ul>
        <li>Sahumerios</li>
        <li>Cascadas de Humo</li>
        <li>Bijouterie</li>
      </ul>
      <CartWidget/> 
    </nav>

    </header>
  )
}
