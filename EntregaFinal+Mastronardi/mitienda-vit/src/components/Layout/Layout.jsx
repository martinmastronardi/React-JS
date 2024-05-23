import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      
      <div>{children}</div>
      
    </div>
  );
};
