import Sahumerio1 from '../assets/Sahumerio1.jpg';
import Sahumerio2 from '../assets/Sahumerio2.jpg';
import Sahumerio3 from '../assets/Sahumerio3.jpg';

export const productos = [
    {
        id: 1,
        nombre: 'Kit de 5',
        descripcion: 'sahumerios de marca Sagrada Madre',
        precio: 3000,
        stock: 10,
        img: Sahumerio1
    },
    {
        id: 2,
        nombre: 'Siete Chakras',
        descripcion: 'sahumerios de marca Sagrada Madre',
        precio: 800,
        stock: 15,
        img: Sahumerio2
    },
    {
        id: 3,
        nombre: 'Renacer/Alegria',
        descripcion: 'sahumerios de marca Sagrada Madre',
        precio: 950,
        stock: 20,
        img: Sahumerio3
    }
]


export const getproducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            
        }, 2000)
    })
}