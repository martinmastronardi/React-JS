import styles from "./itemlistcontainer.module.css";
import { useEffect, useState } from "react";
import { getproducts, productos } from "../../utils/MockData";
import { ItemList } from "../ItemList/ItemList";
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getproducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
      });
  }, []);

  return (
    <div>
      <h1>YUMBREL</h1>
      <h2>Energia Positiva</h2>
      <ItemList productsList={products} />
    </div>
  );
};
