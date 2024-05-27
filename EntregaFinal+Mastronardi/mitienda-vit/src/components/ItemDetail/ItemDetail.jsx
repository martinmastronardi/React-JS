import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../../Context/CartContext";
import Card from "react-bootstrap/Card";

export const ItemDetail = (item) => {
  const { nombre, descripcion, precio, img, stock } = item;

  const { addToCart } = useCartContext();

  const handlleAddToCart = (cantItems) => {
    addToCart(item, cantItems);
  };

  return (
    <Card style={{ width: "18rem", cursor: "pointer" }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>{descripcion}</Card.Text>
      <Card.Text>Price: {precio}</Card.Text>
      <Card.Text>Stock: {stock}</Card.Text>
      <ItemCount
        stock={stock}
        initial={1}
        handlleAddToCart={handlleAddToCart}
      />
    </Card.Body>
  </Card>
  );
};