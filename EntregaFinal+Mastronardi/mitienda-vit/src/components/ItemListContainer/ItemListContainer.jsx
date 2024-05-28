import styles from "./itemlistcontainer.module.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "../spinner/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/dbConnection";
import { collection, getDocs, query, where } from "firebase/firestore";


export const ItemListContainer = ({ bgBlue, greeting }) => {
  const defaultTitle = "Titulo por defecto";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();
  
  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "productos");
    
    if (catId) {
      const cons = query(
        productsCollection,
        where("category", "array-contains", catId)

      );


      getDocs(cons)
        .then(({ docs }) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setProducts(prodFromDocs);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(productsCollection)
        .then(({ docs }) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setProducts(prodFromDocs);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [catId]);

  return (
    <main>
      <h1> {greeting ? greeting : defaultTitle} </h1>
      {loading === true ? (
        <Spinner />
      ) : (
        <div>
          <ItemList productsList={products} />
         
        </div>
      )}
    </main>
  );
};