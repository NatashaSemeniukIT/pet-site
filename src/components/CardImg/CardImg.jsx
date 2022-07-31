import styles from "./CardImg.module.scss";

const CardImg = ({props: {poster_path, original_title}}) => {

  return (
    <div className={styles.card}>
      <img 
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        className={styles.image}
        alt={original_title} 
      />
    </div>
  )
}

export { CardImg };
