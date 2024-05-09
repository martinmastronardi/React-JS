import styles from "./itemlistcontainer.module.css";
import { useEffect, useState } from "react";
import { getproducts, productos } from "../../utils/MockData";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getproducts()
      .then((res) => {
        console.log(res);
        setProducts(res);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>YUMBREL</h1>
      <h2>Energia Positiva</h2>
      {console.log(products)}
    </div>
  );
};
