import React from 'react'
import styes from './Item.module.css'

export const Item = ({id, nombre, descripcion, precio,stock,img}) => {
  return (
    <div className={styes.item}>
        <div className={styes.img}>
            <img src={img} alt="name"/>
        </div>
        <div>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <a href='#'>Ver Detalles</a>
        </div>

    </div>
  )
}
