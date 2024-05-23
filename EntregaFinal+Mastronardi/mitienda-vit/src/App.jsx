import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home.jsx";
import { Navbar } from "./components/Layout/Navbar/Navbar.jsx";
import { Footer } from "./components/Layout/Footer/Footer.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Contact } from "./components/Pages/Contact/Contact.jsx";
import { Error } from "./components/Error/Error.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
