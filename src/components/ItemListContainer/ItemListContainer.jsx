import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "../spinner/Spinner";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase/dbConnection";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const defaultTitle = "Todos Nuestros Productos";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const getCategoryFromPath = () => {
    const path = location.pathname;
    const parts = path.split("/");
    const categoryIndex = parts.indexOf("category");
    if (categoryIndex !== -1 && parts.length > categoryIndex + 1) {
      return parts[categoryIndex + 1];
    }
    return "";
  };

  const category = getCategoryFromPath();

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(db, "productos");
    
    if (category) {
      const cons = query(
        productsCollection,
        where("category", "array-contains", category)
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
  }, [category]);

  const categoryGreetings = {
    Sahumerios: "Sahumerios",
    CascadasHumo: "Cascadas de Humo",
    PiedrasEnergeticas: "Piedras Energéticas"
  };

  const greeting = categoryGreetings[category] || defaultTitle;

  return (
    <main>
      <h1>{greeting}</h1>
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
