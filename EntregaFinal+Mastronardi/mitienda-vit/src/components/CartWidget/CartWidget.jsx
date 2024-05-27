import { useCartContext } from '../../Context/CartContext'
import carrito from '../../assets/carrito.ico'
import styles from './cartwidget.module.css'
export const CartWidget = () => {
    const {totalQty}= useCartContext();
    return (
        <div className={styles.compra}>
                <img src={carrito} alt="carrito" className={styles.carrito}/>
                <span> {totalQty} </span>
        </div>
    )
}