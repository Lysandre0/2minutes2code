import styles from "../../styles/Home.module.css";
import Header from "./header";
import Footer from "./footer";

export default function Card() {
  return (
    <div className={styles.container}>
      <Header />
      <h3>Lorem Ipsum</h3>
      <p>Hello world! I am the content of the page.</p>
      <Footer />
    </div>
  );
}
