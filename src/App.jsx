import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Error } from "./components/Error/Error.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import { useEffect } from "react";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import  CartContextProvider  from "./Context/CartContext.jsx";

const App = () => {
  useEffect(() => {
    const llamadaABack = true;
    if (llamadaABack) {
      localStorage.setItem("isAuth", "true  ");
    } else {
      localStorage.setItem("isAuth", "false");
    }
  });

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />}  />
            <Route path="/products/:prodId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;