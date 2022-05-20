import styles from "../../styles/Home.module.css";
import Footer from "./footer";

export default function Card() {
  return (
    <div>
      <div className={styles.headerCard}>
        <a className={styles.arrow} href="#">
          <img src="/arrow.svg" alt="" height={30} width={30} />
        </a>
        <h3 className={styles.titleCard}>Lorem Ipsum</h3>
        <div className={styles.svgcontainer}>
          <a href="#">
            <img className={styles.iconesvg} src="/edit.svg" alt="" />
          </a>
          <a href="#">
            <img className={styles.iconesvg} src="/delete.svg" alt="" />
          </a>
        </div>
      </div>
      <div className={styles.containerCard}>
        <div className={styles.contentCard}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque egestas malesuada enim sit amet scelerisque. Curabitur
            pulvinar cursus eros id maximus. Nullam a risus nec diam tincidunt
            ullamcorper. In finibus purus eu cursus faucibus. Sed porta vitae
            neque in ultrices. In vitae ipsum ultrices mi lacinia gravida.
            Aenean semper quis lacus id blandit. Donec cursus posuere velit.
            Phasellus ligula nulla, aliquam eu dictum ut, ullamcorper vel lacus.
            Phasellus hendrerit aliquam ex, non fringilla urna condimentum sit
            amet. Donec aliquet enim risus, quis aliquet massa varius et.
            Praesent id scelerisque dolor. Quisque quis mollis orci. Sed et
            iaculis neque, in laoreet neque. Donec orci est, ultricies id
            iaculis at, fringilla et mauris. Aenean semper venenatis dapibus.
            Aenean enim dolor, eleifend ut neque fermentum, rutrum tempor magna.
            Nunc faucibus fermentum interdum. Duis ut libero enim. Ut et purus
            nec orci feugiat pellentesque sed condimentum nunc. Morbi eget diam
            in nisi molestie auctor. Vestibulum et erat consequat, ullamcorper
            dui sit amet, eleifend neque. Proin suscipit magna mauris, in
            venenatis nisl posuere eu. Donec neque augue, sodales nec tellus at,
            rhoncus vestibulum enim. Nunc et consequat diam. Etiam quis dolor
            sit amet dolor fermentum cursus. Proin mollis condimentum metus, sed
            venenatis mauris faucibus ut. Pellentesque ex nunc, laoreet vitae
            lectus nec, tincidunt malesuada ipsum. Phasellus velit magna, rutrum
            non venenatis convallis, varius in lectus. Nulla ullamcorper nibh
            fringilla, ullamcorper augue eget, vestibulum elit. Aenean
            condimentum pulvinar vulputate. Nunc porta facilisis elit, a aliquam
            libero sollicitudin sit amet. Sed nulla justo, efficitur quis
            vehicula lobortis, finibus sit amet arcu. Nulla mattis porttitor
            accumsan.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
