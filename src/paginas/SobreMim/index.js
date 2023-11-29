import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, mundo!</h3>
      <img
        src='https://th.bing.com/th/id/OIP.iW8n5QVZ4-eBMDA4v3Wz3AHaHu?rs=1&pid=ImgDetMain'
        alt="Foto perfil"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      </p>
      <p className={styles.paragrafo}>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <p className={styles.paragrafo}>
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
      <p className={styles.paragrafo}>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      </p>
      <p className={styles.paragrafo}>
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat
      </p>
      <p className={styles.paragrafo}>
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id
      </p>
      <p className={styles.paragrafo}>est laborum.</p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      </p>
      <p className={styles.paragrafo}>
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <p className={styles.paragrafo}>
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
      <p className={styles.paragrafo}>
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      </p>
      <p className={styles.paragrafo}>
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat
      </p>
      <p className={styles.paragrafo}>
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id
      </p>
      <p className={styles.paragrafo}>est laborum.</p>
    </PostModelo>
  );
}
