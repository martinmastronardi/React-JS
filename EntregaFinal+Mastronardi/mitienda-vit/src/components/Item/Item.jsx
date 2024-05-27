import React from 'react'
import styes from './Item.module.css'
import { Link } from "react-router-dom";


export const Item = ({ id, nombre, img }) => {
  const handleOnClick = () => {
  }
  return (
    
    <div className={styes.item}>
        <div className={styes.img}>
            <img src={img} alt="name"/>
        </div>
        <div>
            <h2>{nombre}</h2>
           <Link to= { `/products/${id}`} onClick={handleOnClick}>
            Ver Detalle
            </Link> 
        </div>

    </div>
  )
}
