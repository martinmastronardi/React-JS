import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { ItemCount } from "./components/ItemCount.jsx/ItemCount.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
{/* {porps} me falto */}
      <ItemCount />
    </>
  );
};

export default App;
