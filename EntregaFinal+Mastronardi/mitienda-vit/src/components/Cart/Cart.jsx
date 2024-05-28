import Table from "react-bootstrap/Table";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";
import { db } from "../../firebase/dbConnection";
import { addDoc, collection } from "firebase/firestore";
// import { set } from "firebase/database";

export const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });

  const handleRemoveItem = (id, precio, qty) => {
    removeItem(id, precio, qty);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleSaveCart = () => {
   
    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: totalPrice,
    };
    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        alert("Compra realizada con éxito, su número de orden es: " + doc.id);
        console.log(doc);
        clearCart();
        setFormData({ name: "", tel: "", email: "" });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (cart.length === 0) {
    return <p>El carrito de compras está vacío.</p>;
  }
  return (
    <>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, nombre, precio, qty }, index) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{nombre}</td>
                <td>{precio}</td>
                <td>{qty}</td>
                <td>
                  <button onClick={() => handleRemoveItem(id, precio, qty)}>
                  🗑️
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>Total</td>
            <td> $ {totalPrice}</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={handleClearCart}>Clear Cart</button>

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ingrese nombre"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="number"
        name="tel"
        id="tel"
        placeholder="Ingrese telefono"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ingrese email"
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={handleSaveCart}>Finalizar Compra</button>
    
    </>
  );
};