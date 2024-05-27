// import Sahumerio1 from '../assets/Sahumerio1.jpg';
// import Sahumerio2 from '../assets/Sahumerio2.jpg';
// import Sahumerio3 from '../assets/Sahumerio3.jpg';

// export const productos = [
//     {
//         id: 1,
//         nombre: 'Kit de 5',
//         descripcion: 'sahumerios de marca Sagrada Madre',
//         precio: 3000,
//         stock: 10,
//         img: Sahumerio1
//     },
//     {
//         id: 2,
//         nombre: 'Siete Chakras',
//         descripcion: 'sahumerios de marca Sagrada Madre',
//         precio: 800,
//         stock: 15,
//         img: Sahumerio2
//     },
//     {
//         id: 3,
//         nombre: 'Renacer/Alegria',
//         descripcion: 'sahumerios de marca Sagrada Madre',
//         precio: 950,
//         stock: 20,
//         img: Sahumerio3
//     }
// ]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredProducts = productos.filter((elem) => {
        let isMatch = false;
        elem.category.find((elem) => {
          if (elem === categoryId) {
            isMatch = true;
          }
        });
        return isMatch;
      });
      resolve(filteredProducts);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productos.find((elem) => elem.id === parseInt(productId));
      resolve(product);
    }, 1000);
  });
};
