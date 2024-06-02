import React from 'react'
import notFound from '../../assets/notFound3.jpg'
import style from './Error.module.css'

export const Error = () => {
  return (
    <div className={style.errorpage}>

    <h1>Error, Pagina No Encontrada</h1>  
    <img src={notFound} alt="Error 404" />
    
    </div>
  )
}
