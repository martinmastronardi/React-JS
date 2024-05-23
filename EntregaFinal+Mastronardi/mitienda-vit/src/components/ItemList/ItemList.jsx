import React from 'react'
import { Item } from '../Item/Item'
import styles from './ItemList.module.css'
export const ItemList = ({productsList}) => {
    console.log (productsList)
  return (
    <div className={styles.itemlist}>
{productsList.map((elemento)=>{
    return <Item key={elemento.id} {...elemento}/>
})}

    </div>
  )
}