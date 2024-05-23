import whatsApp from '../../../assets/whats.png'
import instagram from '../../../assets/instagramPNG.webp'
import logo from '../../../assets/Logo.jpg'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div>
      
        <a href="https://www.instagram.com/yumbrel_energiapositiva/" target="_blank">
            <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://wa.me/541565890485/?text=Hola%20me%20comunico%20de%20la%20página%20web" target="_blank">
            <img src={whatsApp} alt="whatsapp" />
        </a>
    </div>
    <p>Creado por Martin Mastronardi - &copy;2023</p>
    <a>
        <img className={styles.logofooter} src={logo} alt="Logo Yumbrel" />
    </a>

</footer>
  )
}
