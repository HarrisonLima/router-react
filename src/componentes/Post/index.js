import styles from "./Post.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        // src={`/assets/posts/${post.id}/capa.png`}
        src='https://th.bing.com/th/id/OIP.iW8n5QVZ4-eBMDA4v3Wz3AHaHu?rs=1&pid=ImgDetMain'
        alt="Imagem de capa do post"
      />

      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}
