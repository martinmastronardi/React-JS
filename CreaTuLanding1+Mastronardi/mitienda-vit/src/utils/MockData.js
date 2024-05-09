export const productos = [
    {
        id: 1,
        nombre: 'Sahumerio',
        desacripcion: 'sahumerios de marca Sagrada Madre',
        precio: 1000,
        stock: 10,
        img: '../assets/Logo.jpg'
    }
]

export const getproducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
            
        }, 2000)
    })
}