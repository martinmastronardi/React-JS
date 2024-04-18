import carrito from '../../assets/carrito.ico'
import styles from './cartwidget.module.css'
export const CartWidget = () => {
    return (
        <div>
                <img src={carrito} alt="carrito" className={styles.carrito}/>
                <span> 0 </span>
        </div>
    )
}