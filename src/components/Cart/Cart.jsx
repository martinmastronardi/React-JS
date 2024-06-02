import Table from "react-bootstrap/Table";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";
import { db } from "../../firebase/dbConnection";
import { addDoc, collection } from "firebase/firestore";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCartContext();
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });
  const [showModal, setShowModal] = useState(false);

  const handleRemoveItem = (id, precio, qty) => {
    removeItem(id, precio, qty);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleSaveCart = () => {
    if (formData.name && formData.tel && formData.email) {
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
    } else {
      setShowModal(true); 
    }
  };
  
 
  const handleCloseModal = () => {
    setShowModal(false);
  };
  

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (cart.length === 0) {
    return <div className={styles.cartvacio}>
    <h2>No ha seleccionado ningun producto</h2>
    <img src="https://www.100natural.com/delivery100/web/vistas/img/cartempty.png" alt="carrito vacío"/>
    </div>
    }
  return (
    <div className={styles.main_container}>
    <h1>Productos Seleccionados</h1>
      <Table striped bordered hover variant="light">
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
      <Button  style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }}onClick={handleClearCart}>Vaciar Carrito</Button>

      <div className={styles.formFinalizar}>
        <h2>Confirmar Compra</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
         type="text"
         name="name"
         id="name"
          placeholder="Ingrese nombre"
          onChange={(e) => handleOnChange(e)}
        />
        <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
        <Form.Label>Telefono</Form.Label>
        <Form.Control
                  type="number"
                  name="tel"
                  id="tel"
          placeholder="Ingrese telefono"
          onChange={(e) => handleOnChange(e)}
        />
        <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email"
        name="email"
        id="email"
        placeholder="Ingrese email"
        onChange={(e) => handleOnChange(e)}
        />
      </Form>
          <Button  style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }} onClick={handleSaveCart}>Finalizar Compra</Button>

          <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formData.name && formData.tel && formData.email ? (
            'La compra se ha finalizado exitosamente.'
          ) : (
            'Por favor, complete todos los campos.'
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </div>
  );
};