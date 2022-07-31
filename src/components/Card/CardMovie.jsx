import styles from "./Card.module.scss";

const CardMovie = ({ props: { poster_path, title, release_date, vote_average, first_air_date, name }}) => {
  
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <span>{vote_average}</span>
      </div>
      <img 
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} 
        className={styles.img} 
        alt={title || name}
      />
      <h6 className={styles.subtitle}>release date: 
        <span className={styles.subtitle_text}>
          {release_date || first_air_date}
        </span>
      </h6>
      <h5 className={styles.title}>
        {title || name}
      </h5>
    </div>
  )
}

export { CardMovie };
