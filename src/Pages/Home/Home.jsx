import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <section className={styles.banner}>
      <h1>Yumbrel Energia Positiva</h1>
        <h2>Piedras Energeticas y Bijouterie</h2>
      </section>
      <main>
      <p className={styles.bienvenido}>¡Bienvenido a <strong>Yumbrel</strong>, tu aliado en el camino hacia la paz y la energía
            positiva! Te
            invitamos a explorar nuestra tienda y descubrir todo lo que tenemos para ofrecerte.
        </p>
      </main>
    </>
  );
};
