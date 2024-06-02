import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};