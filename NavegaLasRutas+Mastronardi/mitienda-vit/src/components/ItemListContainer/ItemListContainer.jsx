import styles from "./itemlistcontainer.module.css";
import { useEffect, useState } from "react";
import { getproducts, productos } from "../../utils/MockData";
import { ItemList } from "../ItemList/ItemList";
import { useFetch } from "../Hooks/useFetch";



export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    getproducts()
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((error) => {
      });
  }, []);

  return (
    <div>
      <h1>YUMBREL</h1>
      <h2>Energia Positiva</h2>
      {loading === true ? (<h3>Cargando...</h3>) : ( 
      <ItemList productsList={products} />
    )}
      </div>
  
  );
};
