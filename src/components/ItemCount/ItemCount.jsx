import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import style from "./ItemCount.module.css";

export const ItemCount = ({ stock, initial, handlleAddToCart }) => {
  const navigate = useNavigate();
  const [cantItems, setCantItems] = useState(0);
  const [pordAgregado, setProdAgregado] = useState(false);

  const handlleAdd = () => {
    setCantItems(cantItems + 1);
  };
  const handlleSubs = () => {
    if (cantItems > 0) {
      setCantItems(cantItems - 1);
    }
  };

  const handleTerminarCompra = () => {
    setProdAgregado(false);
    navigate("/cart");
  };

  const handleAgregarAlCarrito = () => {
    setProdAgregado(true);
    handlleAddToCart(cantItems);
  };

  return (
    <>
      <div>Cantidad</div>
      <div>
        <Button className={style.buttonEstilo} variant="secondary" onClick={handlleAdd}> + </Button>
        <span> {cantItems} </span>
        <Button className={style.buttonEstilo} variant="secondary" onClick={handlleSubs}> - </Button>
      </div>

      {pordAgregado ? (
        <Button onClick={handleTerminarCompra}> Terminar Compra </Button>
      ) : (
        <Button onClick={handleAgregarAlCarrito} disabled={cantItems < 1}>Agregar al carrito</Button>
      )}
    </>
  );
};